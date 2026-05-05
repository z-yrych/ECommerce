// components/ProductCard.tsx
import React, { useContext, useCallback } from "react";
import { type ProductCardProps, type Product } from "../types/types";

import { useCartActions, useCart } from "../contexts/CartContextProvider";



export const ProductCard = React.memo(function ProductCard({ product, qtyInCart }: ProductCardProps) {
    const { addToCart, removeFromCart } = useCartActions();

    // const cart = useCart();
    // console.log(cart);

    // useCallback 

    let onAddToCart = useCallback(() => { addToCart(product) }, [addToCart, product]);
    let onRemoveFromCart = useCallback(() => { removeFromCart(product) }, [addToCart, product]);

    // AddToCart Button
    return (
        <div style={{ border: '1px solid black', padding: '1rem', margin: '1rem' }}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Qty in Cart: {qtyInCart}</p>
            <button onClick={onAddToCart}>
                Add to Cart
            </button>
            <button onClick={onRemoveFromCart}>-</button>
            <button onClick={onAddToCart}>+</button>
        </div>
    )

})