import { useCart } from "../contexts/CartContextProvider";
import { CartItem } from "./CartItem";

export function CartList() {
    const cart = useCart();
    const activeItems = cart.filter((item) => item.qtyInCart > 0);
    const total = cart.reduce((sum, item) => sum + item.product.price * item.qtyInCart, 0);

    return (
        <div className="cart-panel">
            <h2>Shopping Cart</h2>

            {activeItems.length === 0 ? (
                <p className="cart-empty">Your cart is empty.</p>
            ) : (
                <ul className="cart-items-list">
                    {activeItems.map((item) => (
                        <CartItem key={item.product.id} product={item.product} qtyInCart={item.qtyInCart} />
                    ))}
                </ul>
            )}

            <hr className="cart-divider" />
            <div className="cart-total">
                <span className="cart-total-label">Total</span>
                <span className="cart-total-amount">${total.toLocaleString()}</span>
            </div>
        </div>
    );
}

