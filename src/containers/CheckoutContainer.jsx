import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { crearOrden } from '../services/ordenes'
import Checkout from '../components/Checkout'
import './CheckoutContainer.css'

const CheckoutContainer = () => {
  const { carrito, precioTotal, vaciarCarrito } = useCart()
  const [enviando, setEnviando] = useState(false)
  const [ordenId, setOrdenId] = useState(null)
  const [error, setError] = useState(false)

  const handleConfirmar = async (comprador) => {
    setEnviando(true)
    setError(false)
    try {
      const id = await crearOrden({ comprador, items: carrito, total: precioTotal })
      setOrdenId(id)
      vaciarCarrito()
    } catch {
      setError(true)
    } finally {
      setEnviando(false)
    }
  }

  if (carrito.length === 0 && !ordenId) {
    return (
      <section>
        <h2 className="checkout-container__titulo">Checkout</h2>
        <p className="checkout-container__vacio">Tu carrito está vacío, no hay nada para comprar.</p>
      </section>
    )
  }

  return (
    <section>
      <h2 className="checkout-container__titulo">Checkout</h2>
      <Checkout
        total={precioTotal}
        enviando={enviando}
        ordenId={ordenId}
        error={error}
        onConfirmar={handleConfirmar}
      />
    </section>
  )
}

export default CheckoutContainer
