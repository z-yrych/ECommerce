import React, { useContext, useState, useCallback, createContext } from "react";
import { type Product } from "../types/types";

const CartStateContext = createContext<Product[] | undefined>(undefined);
const CartActionsContext = createContext<((item: Product) => void) | undefined>(undefined);

export function CartContextProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = useCallback((item: Product) => {
        setCart((prev) => [...prev, item]);
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