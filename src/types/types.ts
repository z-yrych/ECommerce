type ProductsListProps = {
    children?: React.ReactNode,
    // onPress: (item: Product) => void
}

type Product = {
    id: number,
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

type CartItem = {
    product: Product;
    quantityInCart?: number;
}

export type { ProductsListProps, Product, ShoppingCartIconProps, ProductCardProps, CartItem }
