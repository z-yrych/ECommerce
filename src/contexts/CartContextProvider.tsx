import React, { useContext, useState, useCallback, createContext } from "react";
import { type Product, type CartItem } from "../types/types";


const CartStateContext = createContext<CartItem[] | undefined>(undefined);

const CartActionsContext = createContext<((item: Product) => void) | undefined>(undefined);

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
    }, []);

    return (                                  // ← this was missing            
        <CartStateContext value={cart}>
            <CartActionsContext value={addToCart}>
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

export function useAddToCart() {
    const context = useContext(CartActionsContext);
    if (context === undefined) throw new Error("useAddToCart must be used within CartContextProvider");
    return context;
}