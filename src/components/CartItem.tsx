import React from "react";

import { type CartItem, type Product } from "../types/types";

export function CartItem({ product, quantityInCart }: CartItem) {

    return (
        <div style={{ border: '1px solid black', padding: '1rem', margin: '1rem' }}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>In cart: {quantityInCart}</p>
        </div>
    )
}