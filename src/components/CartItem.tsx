// components/CartItem.tsx
import { useCartActions } from "../contexts/CartContextProvider";
import React, { useCallback } from "react";
import type { CartItemProps } from "../types/types";
import { CartItemCount } from "./CartItemCount";



export const CartItem = React.memo(function CartItem({ product, qtyInCart }: CartItemProps) {
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
                <CartItemCount productId={product.id} />
            </li>
            <button onClick={onRemoveFromCart}>-</button>
            <button onClick={onAddToCart}>+</button>
        </div>
    </>)

})