import { useState } from "react";

const StockCount = ({ initial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(initial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > initial) {
            setContador(contador - 1);
        }
    }

    return (
        <div className="flex flex-col gap-2 lg:flex-row">
            <div>
                <label htmlFor="Quantity" className="sr-only"> Stock </label>
                <div className="flex items-center border border-gray-200 rounded">
                    <button type="button" className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75 text-lg" onClick={decrementar}>-</button>
                    <input type="number" id="Quantity" value={contador} className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none" />
                    <button type="button" className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75 text-lg" onClick={incrementar}>+</button>
                </div>
            </div>
            <button className='flex ml-auto text-white border bg-black py-2 px-6 hover:bg-white hover:text-black hover:border-black rounded transition duration-500 ease-in-out' onClick={() => funcionAgregar(contador)}> Agregar al Carrito </button>
        </div>
    )
}

export default StockCount
