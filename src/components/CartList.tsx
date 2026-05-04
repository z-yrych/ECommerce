// components/CartModal.tsx
import { useCart } from "../contexts/CartContextProvider";
import { CartItem } from "./CartItem";

export function CartList() {
    const cart = useCart();
    console.log(cart);
    return (
        <div>
            <h2>Your Shopping Cart</h2>
            
            {cart.length === 0 ? (
                <p>Your cart is empty. Go buy some Space Stations.</p>
            ) : (
                <ul>
                    {cart.map(item => (
                        <CartItem key={item.product.id} product={item.product} quantityInCart={item.quantityInCart}></CartItem>
                    ))}
                </ul>
            )}
            
            <hr />
            {/* add total for each */}
            <h3>Total: ${cart.reduce((sum, item) => sum + item.product.price, 0).toLocaleString()}</h3>
        </div>
    );
}
