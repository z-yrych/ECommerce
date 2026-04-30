type ProductsListProps = {
    children?: React.ReactNode,
    // onPress: (item: Product) => void
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
    // onPress: (item: Product) => void
}

export type { ProductsListProps, Product, ShoppingCartIconProps, ProductCardProps }