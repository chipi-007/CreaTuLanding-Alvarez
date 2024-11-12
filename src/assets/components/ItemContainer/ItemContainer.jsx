import React from 'react'
import Button from '../Button/Botton'
import "./itemListContainer.css"

const ItemListContainer = (props) => {
  return (
    <div>
        <h3>{props.texto}</h3>
        <Button setCount={props.setCount} count = {props.count} />
    </div>
  )
}

export default ItemListContainer