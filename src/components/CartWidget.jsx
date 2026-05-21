import './CartWidget.css'

// Por ahora la cantidad la pongo estática, en próximas entregas será con contexto
const CartWidget = () => {
  const cantidad = 3

  return (
    <button className="cart-widget" aria-label="Ver carrito">
      <span className="cart-widget__icono">🛒</span>
      <span className="cart-widget__badge">{cantidad}</span>
    </button>
  )
}

export default CartWidget
