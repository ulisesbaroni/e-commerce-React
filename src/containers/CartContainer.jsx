import { useCart } from '../context/CartContext'
import Cart from '../components/Cart'
import './CartContainer.css'

const CartContainer = () => {
  const { carrito, precioTotal, quitarDelCarrito, vaciarCarrito } = useCart()

  return (
    <section>
      <h2 className="cart-container__titulo">Carrito de compras</h2>
      <Cart
        carrito={carrito}
        precioTotal={precioTotal}
        onQuitar={quitarDelCarrito}
        onVaciar={vaciarCarrito}
      />
    </section>
  )
}

export default CartContainer
