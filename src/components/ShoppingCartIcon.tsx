import { type ShoppingCartIconProps } from "../types/types"
import { useContext } from "react";
import { useCartContext } from "../contexts/CartContextProvider";


export function ShoppingCartIcon() {
    const context = useCartContext();
    return (
        <div>
            Cart: {context?.cart.length}
        </div>
    )
}