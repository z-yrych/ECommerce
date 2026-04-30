import React, { useContext, useState } from "react";
import { type Product } from "../types/types";

const ShoppingCartContext = React.createContext<Product[] | undefined>(undefined);

type CartContextProviderProps = {
    children: React.ReactNode;
    cart: Product[];
}

export function CartContextProvider({ children, cart }: CartContextProviderProps) {
    return (
        <ShoppingCartContext value={cart}>
            {children}
        </ShoppingCartContext>
    );
}

export function useCartContext() {
    const context = useContext(ShoppingCartContext);
    return context; 
}