import { useCart } from '../context/CartContext'
import Cart from '../components/Cart'

const CartContainer = () => {
  const { carrito, precioTotal, quitarDelCarrito, vaciarCarrito } = useCart()

  return (
    <Cart
      carrito={carrito}
      precioTotal={precioTotal}
      onQuitar={quitarDelCarrito}
      onVaciar={vaciarCarrito}
    />
  )
}

export default CartContainer
