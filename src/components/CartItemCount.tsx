import { useCart } from "../contexts/CartContextProvider";

type CartItemCountProps = {
    productId: number
}

export function CartItemCount({ productId }: CartItemCountProps) {
    const cart = useCart();

    const cartItem = cart.find(c => c.product.id === productId);
    console.log(cartItem)
    if (!cartItem) return null;

    return (<>
        <strong>In Cart: </strong> {cartItem.qtyInCart}
        <br />
        <strong>Line Total: </strong> ${cartItem.qtyInCart * cartItem.product.price}
        <br />
    </>)
}