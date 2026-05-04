We have product ID's

All child components can use context (useCart and useAddToCart) as a reference but cannot modify state? Or useAddToCart does modify the state or the component?

How does CartList component get access to products array defined in ProductsList.tsx? by calling useCart? -> how does useCart get access to products array? by context = useContext(CartStateContext) -> How does this (context = useContext(CartStateContext)) gets access to the products array? Whats the flow?

