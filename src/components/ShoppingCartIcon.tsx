import { useCart } from "../contexts/CartContextProvider";

export function ShoppingCartIcon() {
    let cart = useCart()
    return (
        <div>
            Cart: {cart.length}
        </div>
    )
}