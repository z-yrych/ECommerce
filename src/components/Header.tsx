// components/Header.tsx
import { useState } from "react";
import { useCart } from "../contexts/CartContextProvider";
import { CartModal } from "./CartModal";

export function Header() {
    const cart = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', borderBottom: '1px solid #ccc' }}>
            <h1>ZyRICH Store</h1>
            
            <button onClick={() => setIsModalOpen(true)} style={{ cursor: 'pointer' }}>
                🛒 Cart ({cart.length})
            </button>

            {/* The actual pop-up */}
            <CartModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </header>
    );
}