import React, { useCallback } from "react";
import { type ProductCardProps } from "../types/types";

import { useCart } from "../hooks/useCart";

export const ProductCard = React.memo(function ProductCard({ product, qtyInCart }: ProductCardProps) {
    const { addToCart, removeFromCart } = useCart();

    const onAddToCart = useCallback(() => { addToCart(product); }, [addToCart, product]);
    const onRemoveFromCart = useCallback(() => { removeFromCart(product); }, [removeFromCart, product]);

    return (
        <div className="product-card">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price.toLocaleString()}</p>
            {qtyInCart !== undefined && qtyInCart > 0 && (
                <span className="qty-in-cart">{qtyInCart} in cart</span>
            )}
            <div className="product-actions">
                <button className="btn-primary" onClick={onAddToCart}>Add to Cart</button>
                <button className="btn-icon" onClick={onRemoveFromCart}>−</button>
                <button className="btn-icon" onClick={onAddToCart}>+</button>
            </div>
        </div>
    );
});
