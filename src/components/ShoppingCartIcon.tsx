import { type ShoppingCartIconProps } from "../types/types"
import { ShoppingCartContext } from "../pages/ProductsPage"
import { useContext } from "react";

export function ShoppingCartIcon() {
    let context = useContext(ShoppingCartContext)
    return (
        <>
        { context?.cart.length }
        </>
    )
}
