import { useCartActions } from "../contexts/CartContextProvider";
import React, { useCallback } from "react";
import type { CartItemProps } from "../types/types";

export const CartItem = React.memo(function CartItem({ product, qtyInCart }: CartItemProps) {
    const { addToCart, removeFromCart } = useCartActions();

    const onAddToCart = useCallback(() => { addToCart(product); }, [addToCart, product]);
    const onRemoveFromCart = useCallback(() => { removeFromCart(product); }, [removeFromCart, product]);

    return (
        <li className="cart-item">
            <div className="cart-item-info">
                <div className="cart-item-name">{product.name}</div>
                <div className="cart-item-meta">${product.price.toLocaleString()} each</div>
                <div className="cart-item-line-total">
                    ${(product.price * qtyInCart).toLocaleString()} &nbsp;·&nbsp; qty {qtyInCart}
                </div>
            </div>
            <div className="cart-item-controls">
                <button className="btn-icon" onClick={onRemoveFromCart}>−</button>
                <button className="btn-icon" onClick={onAddToCart}>+</button>
            </div>
        </li>
    );
});
