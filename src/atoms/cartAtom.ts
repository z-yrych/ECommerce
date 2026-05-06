import { atom, } from "jotai";
import { atomFamily } from 'jotai-family'
import { type CartItem, type Product } from "../types/types";

export const cartAtom = atom<CartItem[]>([]);

export const qtyInCartAtom = (id: number) => atom(get => {
    let qty = get(cartAtom).find(c => c.product.id === id)?.qtyInCart
    return qty;
});

// create an atom for every given id ???
export const itemQtyAtomFamily = atomFamily((id: number) => 
  atom((get) => {
    const cart = get(cartAtom);
    const item = cart.find((c) => c.product.id === id);
    return item?.qtyInCart ?? 0;
  })
);

export const addToCartAtom = atom(null, (get, set, product: Product) => {
    const cart = get(cartAtom); 
    const existing = cart.find(c => c.product.id === product.id);
    if (existing) {
        set(cartAtom, cart.map(c => 
            c.product.id === product.id ? { ...c, qtyInCart: c.qtyInCart + 1 } : c
        ));
    } else {
        set(cartAtom, [...cart, { product, qtyInCart: 1 }]);
    }
});

export const removeFromCartAtom = atom(null, (get, set, product: Product) => {
    const cart = get(cartAtom);
    const existing = cart.find(c => c.product.id === product.id);
    if (existing?.qtyInCart === 1) {
        set(cartAtom, cart.filter(c => c.product.id !== product.id));
    } else {
        set(cartAtom, cart.map(c => 
            c.product.id === product.id ? { ...c, qtyInCart: c.qtyInCart - 1 } : c
        ));
    }
});