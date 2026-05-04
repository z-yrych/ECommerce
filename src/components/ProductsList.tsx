import React, { useContext } from "react";
import { type ProductsListProps } from "../types/types"
import { ProductCard } from "./ProductCard"
import { type Product } from "../types/types";

let productsListArray: Product[] = [
    { id: 1, name: 'Notebook', quantity: 50, price: 45 },
    { id: 2, name: 'Ballpen', quantity: 200, price: 15 },
    { id: 3, name: 'Backpack', quantity: 20, price: 1200 },
    { id: 4, name: 'Wireless Mouse', quantity: 35, price: 650 },
    { id: 5, name: 'Mechanical Keyboard', quantity: 15, price: 3500 },
    { id: 6, name: 'USB Flash Drive (32GB)', quantity: 60, price: 300 },
    { id: 7, name: 'Water Bottle', quantity: 80, price: 150 },
    { id: 8, name: 'Phone Charger', quantity: 40, price: 500 },
    { id: 9, name: 'Desk Lamp', quantity: 25, price: 900 },
    { id: 10, name: 'Headphones', quantity: 30, price: 1800 }
];

// What scenario or feature would make sense wherein ProductsList cares about what's in the cart
export function ProductsList() {
    let products = productsListArray
    return (
        <div>
            <h2>PRODUCTS LIST</h2>
            {
                products.map(product => (
                    <ProductCard key={product.name} product={product} />
                ))
            }
        </div>
    )
}