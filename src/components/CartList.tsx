// components/CartModal.tsx
import { useAddToCart, useCart } from "../contexts/CartContextProvider";


export function CartList() {
    const cart = useCart();
    const addToCart = useAddToCart()
    console.log(cart)
    return (
        <div>
            <h2>Your Shopping Cart</h2>

            {cart.length === 0 ? (
                <p>Your cart is empty. Go buy some Space Stations.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <div key={item.product.id}>
                            <li>
                                <strong>Item:</strong> {item.product.name}
                                <br />
                                <strong>Unit Price</strong> ${item.product.price}
                                <br />
                                <strong>Qty In Cart</strong> {item.qtyInCart}
                                <br />
                                <strong>Line Total:</strong> ${(item.product.price *
                                    item.qtyInCart)}
                            </li>
                            <button>-</button>
                            <button onClick={() => addToCart(item.product)}>+</button>
                        </div>
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

