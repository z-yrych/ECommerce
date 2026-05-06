import { useAtom, atom, useAtomValue } from "jotai";
import { cartAtom, qtyInCartAtom, itemQtyAtomFamily } from "../atoms/cartAtom";

type CartItemCountProps = {
    productId: number
}

export function CartItemCount({ productId }: CartItemCountProps) {
    const qtyInCart = useAtomValue(itemQtyAtomFamily(productId));
    console.log(qtyInCart);

    return (<>
    <span className="qty-in-cart">In Cart: {qtyInCart}</span>
    </>)
}