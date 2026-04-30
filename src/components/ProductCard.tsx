import { type ProductCardProps, type Product } from "../types/types";


// probably use context for shoppingCartArray
let shoppingCartArray: Product[] = [];


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