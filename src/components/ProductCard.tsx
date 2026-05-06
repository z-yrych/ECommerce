import React, { useCallback } from "react";
import { type ProductCardProps } from "../types/types";

import { useSetAtom } from "jotai";
import { addToCartAtom, removeFromCartAtom } from "../atoms/cartAtom";

import { CartItemCount } from "./CartItemCount";

export const ProductCard = React.memo(function ProductCard({ product }: ProductCardProps) {
    const addToCart = useSetAtom(addToCartAtom);
    const removeFromCart = useSetAtom(removeFromCartAtom);

    const onAddToCart = useCallback(() => { addToCart(product); }, [addToCart, product]);
    const onRemoveFromCart = useCallback(() => { removeFromCart(product); }, [removeFromCart, product]);

    return (
        <div className="product-card">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price.toLocaleString()}</p>
            <CartItemCount productId={product.id} />
            <div className="product-actions">
                <button className="btn-primary" onClick={onAddToCart}>Add to Cart</button>
                <button className="btn-icon" onClick={onRemoveFromCart}>−</button>
                <button className="btn-icon" onClick={onAddToCart}>+</button>
            </div>
        </div>
    );
});
