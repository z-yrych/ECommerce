import React, { useCallback } from "react";
import type { CartItemProps } from "../types/types";

// import { useCart } from "../hooks/useCart";
import { addToCartAtom, removeFromCartAtom } from "../atoms/cartAtom";

import { CartItemCount } from "./CartItemCount";
import { useSetAtom } from "jotai";

export const CartItem = React.memo(function CartItem({ product }: CartItemProps) {
    const addToCart = useSetAtom(addToCartAtom);
    const removeFromCart = useSetAtom(removeFromCartAtom);

    console.log('CART ITEM RENDERED', product)

    const onAddToCart = useCallback(() => { addToCart(product); }, [addToCart, product]);
    const onRemoveFromCart = useCallback(() => { removeFromCart(product); }, [removeFromCart, product]);

    return (
        <li className="cart-item">
            <div className="cart-item-info">
                <div className="cart-item-name">{product.name}</div>
                <div className="cart-item-meta">${product.price.toLocaleString()} each</div>
            </div>
            <CartItemCount productId={product.id}/>
            <div className="cart-item-controls">
                <button className="btn-icon" onClick={onRemoveFromCart}>−</button>
                <button className="btn-icon" onClick={onAddToCart}>+</button>
            </div>
        </li>
    );
});
