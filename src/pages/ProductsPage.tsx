import { useState } from "react";

let shoppingCartArray = [];

type ShoppingCartIconProps = {
    cartLength: number;
}

type ProductCardProps = {
    product: Product;
}

type ProductsListProps = {
    products: Product[],
    children?: React.ReactNode;
}

type Product = {
    name: string,
    quantity: number,
    price: number
}

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


export function ProductsPage() {
    return (<>
        <Header />
        <br />
        <ProductsList products={productsListArray} />
    </>)
}

export function Header() {
    return (

        <ShoppingCartIcon></ShoppingCartIcon >
    )
}

export function ShoppingCartIcon() {
    return <button>
        Cart
    </button>
}


// Map productListArray items to ProductCard
export function ProductsList({ }: ProductsListProps) {
    return (
        <div>
            <h2>PRODUCTS LIST</h2>
            {
                productsListArray.map(product => (
                    // We render a ProductCard for each item, passing the product data
                    <ProductCard key={product.name} product={product} />
                ))
            }
        </div>
    )
}


export function ProductCard({ product }: ProductCardProps) {

    function handleAddToCart() {
        shoppingCartArray.push(product);
        console.log(shoppingCartArray)
    }

    // AddToCart Button
    return (
        <div style={{ border: '1px solid black', padding: '1rem', margin: '1rem' }}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Qty Available: {product.quantity}</p>
            <button onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    )

}

// Track number of products in cart -> How? -> Use State (Array) -> ShoppingCartState
// Products Hardcoded in Array -> Properties of Products -> Name Quantity Price
// When add product clicked what exactly happens -> retrieve the Product { Name Quantity Price } add to array # of products in array === number at the upper right of the shopping cart icon 













