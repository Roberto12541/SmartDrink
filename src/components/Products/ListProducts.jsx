import Product from "./Product"

const ListProducts = ({productos}) => {
    return (
        <>
            {productos.map(producto => <Product key={producto.id} {...producto} />)}
        </>
    )
}

export default ListProducts
