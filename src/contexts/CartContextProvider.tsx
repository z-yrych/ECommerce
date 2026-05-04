import React, { useContext, useState, useCallback, createContext } from "react";
import { type Product, type CartItem } from "../types/types";

const CartStateContext = createContext<CartItem[] | undefined>(undefined);

const CartActionsContext = createContext<((item: Product) => void) | undefined>(undefined);

export function CartContextProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = useCallback((item: Product) => {
        
        setCart((prev) => {
            const existingItem = prev.find(i => i.product.id === item.id);

            if (existingItem) {
                console.log('dupe found');
                return prev.map(i => {
                    if (i.product.id === item.id) {
                        return { ...i, quantityInCart: (i.quantityInCart ?? 0) + 1 };
                    } else {
                        return i;
                    }
                });
            }

            return [...prev, { product: item, quantityInCart: 1 }];
        });
    }, []);

    return (
        <CartStateContext value={cart}>
            <CartActionsContext value={addToCart}>
                {children}
            </CartActionsContext>
        </CartStateContext>
    );
}

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