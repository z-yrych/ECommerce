import { useCartActions } from "../contexts/CartContextProvider";
import type { CartItem } from "../types/types";



export function CartItem({ product, qtyInCart }: CartItem) {
    // const cart = useCart();
    const { addToCart, removeFromCart } = useCartActions();

    return (<>
        <div key={product.id}>
            <li>
                <strong>Item:</strong> {product.name}
                <br />
                <strong>Unit Price</strong> ${product.price}
                <br />
                <strong>Qty In Cart</strong> {qtyInCart}
                <br />
                <strong>Line Total:</strong> ${(product.price *
                    qtyInCart)}
            </li>
            <button onClick={() => removeFromCart(product)}>-</button>
            <button onClick={() => addToCart(product)}>+</button>
        </div>
    </>)

}