// components/CartList.tsx
import { useCartActions, useCart } from "../contexts/CartContextProvider";
import { CartItem } from "./CartItem";


export function CartList() {
    const cart = useCart();
    // const { addToCart, removeFromCart } = useCartActions();
    console.log(cart)
    return (
        <div>
            <h2>Your Shopping Cart</h2>

            {cart.length === 0 ? (
                <p>Your cart is empty. Go buy some Space Stations.</p>
            ) : (
                <ul>
                    {cart
                        .filter((item) => (item.qtyInCart > 0))
                        .map((item) => (
                        <CartItem key={item.product.id} product={item.product} qtyInCart={item.qtyInCart}/>
                    ))}
                </ul>
            )}

            <hr />
            <h3>Total: ${cart.reduce((sum, item) => sum + (item.product.price *
                item.qtyInCart), 0)}
            </h3>
        </div>
    );
}

