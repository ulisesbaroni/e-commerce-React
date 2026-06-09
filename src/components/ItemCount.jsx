import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ stock, onAgregar }) => {
  const [cantidad, setCantidad] = useState(1)

  const restar = () => setCantidad(c => Math.max(1, c - 1))
  const sumar = () => setCantidad(c => Math.min(stock, c + 1))

  return (
    <div className="item-count">
      <div className="item-count__controles">
        <button className="item-count__btn" onClick={restar} disabled={cantidad === 1}>−</button>
        <span className="item-count__numero">{cantidad}</span>
        <button className="item-count__btn" onClick={sumar} disabled={cantidad === stock}>+</button>
      </div>
      <button className="item-count__agregar" onClick={() => onAgregar(cantidad)}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount
