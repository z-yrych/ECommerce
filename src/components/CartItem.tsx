// components/CartItem.tsx
import { useCartActions } from "../contexts/CartContextProvider";
import React, { useCallback } from "react";
import type { CartItemType } from "../types/types";
import { CartItemDetails } from "./CartItemDetails";



export const CartItem = React.memo(function CartItem({ product, qtyInCart }: CartItemType) {
    // const cart = useCart();
    const { addToCart, removeFromCart } = useCartActions();

    let onAddToCart = useCallback(() => { addToCart(product) }, [addToCart, product]);
    let onRemoveFromCart = useCallback(() => { removeFromCart(product) }, [addToCart, product]);

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
            <button onClick={onRemoveFromCart}>-</button>
            <button onClick={onAddToCart}>+</button>
        </div>
    </>)

})