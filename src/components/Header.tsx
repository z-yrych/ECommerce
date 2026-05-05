// components/Header.tsx
// import { useState } from "react";
import { useCart } from "../contexts/CartContextProvider";

export function Header() {
    const cart = useCart();

    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', borderBottom: '1px solid #ccc' }}>
            <h1>ZyRICH Store</h1>
            
            <button style={{ cursor: 'pointer' }}>
                🛒 Cart ({cart.length})
            </button>
        </header>
    );
}