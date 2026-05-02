import { useState, createContext } from "react";

import { type Product } from "../types/types";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductsList } from "../components/ProductsList";


let productsListArray: Product[] = [
    { name: 'Nico', quantity: 1, price: 100000000000000 },
    { name: 'Cyber Truck', quantity: 10, price: 80000 },
    { name: 'Private Island', quantity: 1, price: 5000000 },
    { name: 'Space Station', quantity: 1, price: 150000000000 },
    { name: 'Golden Keyboard', quantity: 5, price: 2500 },
    { name: 'Superyacht', quantity: 1, price: 300000000 },
    { name: 'Vintage Wine', quantity: 23, price: 15000 },
    { name: 'Mars Rover', quantity: 6, price: 2500000000 },
    { name: 'Diamond Crown', quantity: 14, price: 12000000 },
    { name: 'Teleporter Prototype', quantity: 12, price: 999999999999 }
];



// let shoppingCartArray: Product[] = [];

type ShoppingCartContextType = {
    cart: Product[];
    addToCart: (item: Product) => void;
}
export const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(undefined);

export function ProductsPage() {
    const [cart, setCart] = useState<Product[]>([]);

    function addToCart(item: Product) {
        // create new Array with spread, append item
        setCart([...cart, item]);
    }

    return (
        <ShoppingCartContext value={{ cart, addToCart }}>
            <Header />
            <ProductsList products={productsListArray} />
            <Footer />
        </ShoppingCartContext>
    );
}


// Track number of products in cart -> How? -> Use State (Array) -> ShoppingCartState
// Products Hardcoded in Array -> Properties of Products -> Name Quantity Price
// When add product clicked what exactly happens -> retrieve the Product { Name Quantity Price } add to array # of products in array === number at the upper right of the shopping cart icon 
