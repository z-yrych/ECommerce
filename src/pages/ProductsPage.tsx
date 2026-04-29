type ShoppingCartIconProps = {
  number: number;
}

type ProductCardProps = {
    // name
    // quantity
    // price
}

type ProductsListProps = {
    children: React.ReactNode;
}

let productsListArray = [
  { name: 'Nico', quantity: 1, price: 100000000000000 },
  { name: 'Cyber Truck', quantity: 1, price: 80000 },
  { name: 'Private Island', quantity: 1, price: 5000000 },
  { name: 'Space Station', quantity: 1, price: 150000000000 },
  { name: 'Golden Keyboard', quantity: 1, price: 2500 },
  { name: 'Superyacht', quantity: 1, price: 300000000 },
  { name: 'Vintage Wine', quantity: 1, price: 15000 },
  { name: 'Mars Rover', quantity: 1, price: 2500000000 },
  { name: 'Diamond Crown', quantity: 1, price: 12000000 },
  { name: 'Teleporter Prototype', quantity: 1, price: 999999999999 }
];
let shoppingCartArray = [];

export function ProductsPage() {
    return (<>
        <Header />
        <br/>
        <ProductsList>
            <ProductCard></ProductCard>
        </ProductsList>
    </>)
}

export function Header() {
    return (
        'HEADER'
        // <ShoppingCartIcon>

        // </ShoppingCartIcon>
    )
}

export function ShoppingCartIcon() {
    return <button>
        Cart
    </button>
}


// Map productListArray items to ProductCard
export function ProductsList({ children }: ProductsListProps) {
    return (<>
    PRODUCTS LIST
        { children }
    </>)
}

export function ProductCard () {

    function handleAddToCart() {
        console.log('Added to cart')
        shoppingCartArray.push( {
            name: 'Nico',
            quantity: '1',
            price: '100000000000000'
        } )
        console.log(shoppingCartArray);
    }

    // AddToCart Button
    return <button onClick={handleAddToCart}>
        Add to Cart
    </button>

}

// Track number of products in cart -> How? -> Use State (Array) -> ShoppingCartState
// Products Hardcoded in Array -> Properties of Products -> Name Quantity Price
// When add product clicked what exactly happens -> retrieve the Product { Name Quantity Price } add to array # of products in array === number at the upper right of the shopping cart icon 











