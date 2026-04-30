import { type ShoppingCartIconProps } from "../types/types"
import { useContext } from "react";
import { useCartContext } from "../contexts/CartContextProvider";


export function ShoppingCartIcon() {
    let cart = useCartContext()
    return (
        <div>
            Cart: {cart.length}
        </div>
    )
}