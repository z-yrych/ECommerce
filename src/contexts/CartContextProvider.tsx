import React, { useContext, useState, useCallback, createContext, useMemo } from "react";
import { type Product, type CartItem } from "../types/types";

const CartStateContext = createContext<CartItem[] | undefined>(undefined);
// const CartActionsContext = createContext<((item: Product) => void) | undefined>(undefined);

type CartActions = {
    addToCart: (item: Product) => void;
    removeFromCart: (item: Product) => void;
    // removeFromCart: (productId: number) => void;
    // clearCart: () => void;
};

const CartActionsContext = createContext<CartActions | undefined>(undefined);


export function CartContextProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);

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