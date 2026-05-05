export type ProductsListProps = {
    children?: React.ReactNode,
    // onPress: (item: Product) => void
}

export type Product = {
    id: number,
    name: string,
    quantity: number,
    price: number
}

export type ShoppingCartIconProps = {
    cartLength: number;
}

export type ProductCardProps = {
    product: Product;
    qtyInCart: number | undefined;  
}

export type ProductListProps = {
    product: Product;
}

export type CartItemProps = {
    product: Product
    qtyInCart: number;
}