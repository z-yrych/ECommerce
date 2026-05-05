// components/ProductCard.tsx
import React, { useContext, useCallback } from "react";
import { type ProductCardProps, type Product } from "../types/types";

import { useCartActions, useCart } from "../contexts/CartContextProvider";



export const ProductCard = React.memo(function ProductCard({ product }: ProductCardProps) {
    const { addToCart, removeFromCart } = useCartActions();

    // const cart = useCart();
    // console.log(cart);

    // useCallback 

    let onAddToCart = useCallback(() => { addToCart(product) }, [addToCart, product]);

    // AddToCart Button
    return (
        <div style={{ border: '1px solid black', padding: '1rem', margin: '1rem' }}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Qty Available: {product.quantity}</p>
            <button onClick={onAddToCart}>
                Add to Cart
            </button>
            <button onClick={() => removeFromCart(product)}>-</button>
            <button onClick={() => addToCart(product)}>+</button>
        </div>
    )

})