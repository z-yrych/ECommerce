import { useCart } from "../contexts/CartContextProvider";

export function Header() {
    const cart = useCart();
    const totalItems = cart.reduce((sum, item) => sum + item.qtyInCart, 0);

    return (
        <header className="header">
            <h1 className="header-logo">ZyRICH Store</h1>
            <button className="cart-btn">
                🛒 Cart
                {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
            </button>
        </header>
    );
}
