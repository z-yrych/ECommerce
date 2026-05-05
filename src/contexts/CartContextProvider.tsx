import React, { useContext, useState, useCallback, createContext, useMemo } from "react";
import { type Product, type CartItemType } from "../types/types";

const CartStateContext = createContext<CartItemType[] | undefined>(undefined);
// const CartActionsContext = createContext<((item: Product) => void) | undefined>(undefined);

type CartActions = {
    addToCart: (item: Product) => void;
    removeFromCart: (item: Product) => void;
    // removeFromCart: (productId: number) => void;
    // clearCart: () => void;
};

const CartActionsContext = createContext<CartActions | undefined>(undefined);


export function CartContextProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItemType[]>([]);

    const addToCart = useCallback((item: Product) => {
        setCart((prev) => {
            const existing = prev.find(c => c.product.id === item.id);
            if (existing) {
                return prev.map(c =>
                    c.product.id === item.id
                        ? { ...c, qtyInCart: c.qtyInCart + 1 }
                        : c
                );
            }
            return [...prev, { product: item, qtyInCart: 1 }];
        });
    }, []); // investigate add setCart in dependency array

    const removeFromCart = useCallback((item: Product) => {
        setCart((prev) => {
            const existing = prev.find(c => c.product.id === item.id);

            if (existing) {
                if (existing.qtyInCart > 1) {
                    return prev.map(c =>
                        c.product.id === item.id
                            ? { ...c, qtyInCart: c.qtyInCart - 1 }
                            : c
                    );
                } 
                
                return prev.filter(c => c.product.id !== item.id);
            }
            return prev;
        });
    }, []);

    const actions = useMemo(() => ({
        addToCart,
        removeFromCart,
        // clearCart: () => setCart([])
    }), [addToCart, removeFromCart]);

    return (
        <CartStateContext value={cart}>
            <CartActionsContext value={actions}>
                {children}
            </CartActionsContext>
        </CartStateContext>
    );
}

// Are these 2 context splitting?

export function useCart() {
    const context = useContext(CartStateContext);
    if (context === undefined) throw new Error("useCart must be used within CartContextProvider");
    return context;
}

export function useCartActions() {
    const context = useContext(CartActionsContext);
    if (context === undefined) throw new Error("useAddToCart must be used within CartContextProvider");
    return context;
}

// export function useQtyInCart() {
//     const context = useContext(CartStateContext);
//     if (context === undefined) throw new Error("useCart must be used within CartContextProvider");
//     return context;
// } TODO: INVESTIGATE WHY ADDING ANOTHER SPLIT WOULD CAUSE THE COMPONENTS TO RE-RENDER.
// WHAT IF THE COMPONENT THAT WILL SUBSCRIBE TO THE CONTEXT SPLIT IS PRODUCTS LIST (VS PRODUCTCARD)

// Investigate this -> 
// same issue with calling useCart() directly so we there's no approach where we can use adding another split to the CartContextProvider that provides access  
//   to qtyincart?                                                                                                                                               
                                                                                                                                                              
// ⏺ Correct. That's the fundamental limitation of React context — it doesn't support selectors out of the box. Any change to the context value re-renders all   
//   consumers, regardless of how you split it.                                                      

//   So you're back to two realistic options:                                                                                                                    
   
//   1. Prop approach — parent reads cart, passes qtyInCart as a number prop, React.memo handles optimization                                                    
//   2. Accept the re-renders — ProductCard reads useCart() directly, get the feature working, optimization is a later problem
                                                                                                                                                              
//   For a product list of typical size, option 2 is honestly fine. Re-rendering a few extra cards isn't noticeable.  