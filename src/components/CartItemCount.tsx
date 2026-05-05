import { useAtom } from "jotai";
import { cartAtom } from "../atoms/cartAtom";

type CartItemCountProps = {
    productId: number
}

export function CartItemCount({ productId }: CartItemCountProps) {
    const cart = useAtom(cartAtom);
    console.log(cart);
    // // const cartItem = cart.find(c => c.product.id === productId);
    // console.log(cartItem)
    // if (!cartItem) return null;

    return (<>
    </>)
}