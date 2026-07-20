import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import './Cart.css'

const Cart = ({ carrito, precioTotal, onQuitar, onVaciar }) => {
  if (carrito.length === 0) {
    return (
      <div className="cart cart--vacio">
        <h2 className="cart__titulo">Carrito de compras</h2>
        <p className="cart__vacio-texto">Tu carrito está vacío</p>
        <Link to="/" className="cart__seguir-comprando">Ver productos</Link>
      </div>
    )
  }

  return (
    <div className="cart">
      <h2 className="cart__titulo">Carrito de compras</h2>

      <div className="cart__items">
        {carrito.map(item => (
          <CartItem key={item.id} item={item} onQuitar={onQuitar} />
        ))}
      </div>

      <div className="cart__resumen">
        <button className="cart__vaciar" onClick={onVaciar}>Vaciar carrito</button>
        <p className="cart__total">
          Total <span>${precioTotal.toLocaleString('es-AR')}</span>
        </p>
      </div>

      <Link to="/checkout" className="cart__finalizar">Finalizar compra</Link>
    </div>
  )
}

export default Cart
