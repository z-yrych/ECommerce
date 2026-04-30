import React, { useContext } from "react";
import { type ProductCardProps, type Product } from "../types/types";

import { useAddToCart } from "../contexts/CartContextProvider";
// import { ShoppingCartContext } from "../pages/ProductsPage";

// probably use context for shoppingCartArray


export const ProductCard = React.memo(function ProductCard({ product }: ProductCardProps) {
    const addToCart = useAddToCart();

    // AddToCart Button
    return (
        <div style={{ border: '1px solid black', padding: '1rem', margin: '1rem' }}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Qty Available: {product.quantity}</p>
            <button onClick={() => addToCart(product)}>
                Add to Cart
            </button>
        </div>
    )

})