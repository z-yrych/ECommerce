import { useAtom } from "jotai";
import { cartAtom } from "../atoms/cartAtom";

export function Header() {
    // TODO: re-implement header
    // const cart = useAtom(cartAtom);
    // const totalItems = cart.reduce((sum, item) => sum + item.qtyInCart, 0);

    return (
        <header className="header">
            <h1 className="header-logo">ZyRICH Store</h1>
            <button className="cart-btn">
                🛒 Cart
            </button>
        </header>
    );
}
