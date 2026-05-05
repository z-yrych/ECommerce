// components/CartItem.tsx
import { useCartActions } from "../contexts/CartContextProvider";
import React from "react";
import type { CartItemType } from "../types/types";



export const CartItem = React.memo(function CartItem({ product, qtyInCart }: CartItemType) {
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

})