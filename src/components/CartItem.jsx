import './CartItem.css'

const CartItem = ({ item, onQuitar }) => {
  const { id, nombre, precio, imagen, cantidad } = item
  const subtotal = precio * cantidad

  return (
    <article className="cart-item">
      <img src={imagen} alt={nombre} className="cart-item__imagen" />

      <div className="cart-item__info">
        <h3 className="cart-item__nombre">{nombre}</h3>
        <p className="cart-item__precio">${precio.toLocaleString('es-AR')} x {cantidad}</p>
      </div>

      <div className="cart-item__derecha">
        <p className="cart-item__subtotal">${subtotal.toLocaleString('es-AR')}</p>
        <button className="cart-item__quitar" onClick={() => onQuitar(id)}>
          Quitar
        </button>
      </div>
    </article>
  )
}

export default CartItem
