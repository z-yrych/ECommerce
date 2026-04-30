import React, { useContext, useState } from "react";
import { type Product } from "../types/types";

type ShoppingCartContextType = {
    cart: Product[];
    addToCart: (item: Product) => void;
}

type CartContextProviderProps = {
    children?: React.ReactNode
}

const ShoppingCartContext = React.createContext<ShoppingCartContextType | undefined>(undefined);

export function CartContextProvider({children}: CartContextProviderProps) {
    const [cart, setCart] = useState<Product[]>([]);

    function addToCart(item: Product) {
        setCart([...cart, item]);
    }

    return (
        <ShoppingCartContext value={{ cart, addToCart }}>
            { children }
        </ShoppingCartContext>
    )
}

export function useCartContext() {
    return (useContext(ShoppingCartContext));
}