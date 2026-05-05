import { useAtom } from 'jotai';
import { cartAtom } from '../atoms/cartAtom';
import { type Product } from '../types/types';

export function useCart() {
    const [cart, setCart] = useAtom(cartAtom);

    function addToCart(item: Product) {
        setCart(prev => {
            const existing = prev.find(c => c.product.id === item.id);
            if (existing) {
                return prev.map(c =>
                    c.product.id === item.id
                        ? { ...c, qtyInCart: c.qtyInCart + 1 }
                        : c
                );
            }
            return [...prev, { product: item, qtyInCart: 1 }];
        });
    }

    function removeFromCart(item: Product) {
        setCart(prev => {
            const existing = prev.find(c => c.product.id === item.id);
            if (!existing) return prev;
            if (existing.qtyInCart > 1) {
                return prev.map(c =>
                    c.product.id === item.id
                        ? { ...c, qtyInCart: c.qtyInCart - 1 }
                        : c
                );
            }
            return prev.filter(c => c.product.id !== item.id);
        });
    }

    return { cart, addToCart, removeFromCart };
}