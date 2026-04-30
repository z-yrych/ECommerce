// components/CartModal.tsx
import { useCart } from "../contexts/CartContextProvider";

export function CartModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const cart = useCart();

    if (!isOpen) return null; // Don't render anything if closed

    return (
        <div style={modalOverlayStyle}>
            <div style={modalContentStyle}>
                <h2>Your Shopping Cart</h2>
                <button onClick={onClose} style={{ float: 'right' }}>Close</button>
                
                {cart.length === 0 ? (
                    <p>Your cart is empty. Go buy some Space Stations.</p>
                ) : (
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                {item.name} - ${item.price.toLocaleString()}
                            </li>
                        ))}
                    </ul>
                )}
                
                <hr />
                <h3>Total: ${cart.reduce((sum, item) => sum + item.price, 0).toLocaleString()}</h3>
            </div>
        </div>
    );
}

// Quick styles for the "Pop-up" look
const modalOverlayStyle: React.CSSProperties = {
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'
};
const modalContentStyle: React.CSSProperties = {
    backgroundColor: 'white', padding: '2rem', borderRadius: '8px', minWidth: '300px'
};