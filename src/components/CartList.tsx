// components/CartModal.tsx
import { useCart } from "../contexts/CartContextProvider";

export function CartList() {
    const cart = useCart();

    return (
        <div>
            <h2>Your Shopping Cart</h2>
            
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
    );
}

