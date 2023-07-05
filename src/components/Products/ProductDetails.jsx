import { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase";
import Details from "./Details";

const ProductDetails = () => {
    const [itemProducto, setProducto] = useState(null);
    const { producto } = useParams();
    console.log(producto);

    useEffect(() => {
        const queryProducto = doc(db, 'products', producto)
        getDoc(queryProducto)
            .then(res => {
                const data = res.data()
                const newProducto = { id: res.id, ...data }
                setProducto(newProducto)
            })
            .catch(error => console.log(error))
    }, [producto])


    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <Details {...itemProducto}/>
            </div>
        </section>

    )
}

export default ProductDetails
