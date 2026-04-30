import React, { useContext } from "react";
import { type ProductsListProps } from "../types/types"
import { ProductCard } from "./ProductCard"
import { type Product } from "../types/types";

let productsListArray: Product[] = [
    { name: 'Notebook', quantity: 50, price: 45 },
    { name: 'Ballpen', quantity: 200, price: 15 },
    { name: 'Backpack', quantity: 20, price: 1200 },
    { name: 'Wireless Mouse', quantity: 35, price: 650 },
    { name: 'Mechanical Keyboard', quantity: 15, price: 3500 },
    { name: 'USB Flash Drive (32GB)', quantity: 60, price: 300 },
    { name: 'Water Bottle', quantity: 80, price: 150 },
    { name: 'Phone Charger', quantity: 40, price: 500 },
    { name: 'Desk Lamp', quantity: 25, price: 900 },
    { name: 'Headphones', quantity: 30, price: 1800 }
];



// Map productListArray items to ProductCard
export const ProductsList = React.memo(function ProductsList() {
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
})