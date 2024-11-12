import { useState } from "react"
import "./button.css"

const Button = ( {setCount, count}) => {

    return(
        <div>

            <button
            onClick={() => setCount(count+1) } /*como count es constante, utiliza la funcion setCount para guardar el valor*/
            >Agregar al carrito
            </button>

        </div>
    )
}

export default Button