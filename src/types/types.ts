type ProductsListProps = {
    products: Product[],
    children?: React.ReactNode;
}

type Product = {
    name: string,
    quantity: number,
    price: number
}

type ShoppingCartIconProps = {
    cartLength: number;
}

type ProductCardProps = {
    product: Product;
}

export type { ProductsListProps, Product, ShoppingCartIconProps, ProductCardProps }