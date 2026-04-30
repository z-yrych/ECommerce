import React, { useState, createContext } from "react";

import { type Product } from "../types/types";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductsList } from "../components/ProductsList";
import { CartContextProvider } from "../contexts/CartContextProvider";

// let shoppingCartArray: Product[] = [];


export function ProductsPage() {
    return (
    <>
    <CartContextProvider>
        <Header />
        <ProductsList />
    </CartContextProvider>
    <Footer />
    </>
    );
}


// Track number of products in cart -> How? -> Use State (Array) -> ShoppingCartState
// Products Hardcoded in Array -> Properties of Products -> Name Quantity Price
// When add product clicked what exactly happens -> retrieve the Product { Name Quantity Price } add to array # of products in array === number at the upper right of the shopping cart icon 













