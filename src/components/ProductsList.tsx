import { ProductCard } from "./ProductCard"
import { type Product } from "../types/types";

import { useAtom } from "jotai";
import { cartAtom } from "../atoms/cartAtom";

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

export function ProductsList() {
    let products = productsListArray;
    let cart = useAtom(cartAtom);

    return (
        <div className="products-section">
            <h2 className="section-title">Products</h2>
            <div className="products-grid">
                {products.map(product => {
                    return (
                        <ProductCard key={product.id} product={product} qtyInCart={1} />
                    );
                })}
            </div>
        </div>
    );
}
