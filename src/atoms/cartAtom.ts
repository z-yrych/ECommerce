import { atom } from "jotai";
import { type CartItem } from "../types/types";

export const cartAtom = atom<CartItem[]>([]);

