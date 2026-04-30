import { type ProductsListProps } from "../types/types"
import { ProductCard } from "./ProductCard"

// Map productListArray items to ProductCard
export function ProductsList({ products }: ProductsListProps) {
    return (
        <div>
            <h2>PRODUCTS LIST</h2>
            {
                products.map(product => (
                    // We render a ProductCard for each item, passing the product data
                    <ProductCard key={product.name} product={product} />
                ))
            }
        </div>
    )
}