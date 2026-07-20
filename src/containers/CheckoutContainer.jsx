import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { crearOrden } from '../services/ordenes'
import Checkout from '../components/Checkout'

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

  return (
    <Checkout
      carritoVacio={carrito.length === 0}
      total={precioTotal}
      enviando={enviando}
      ordenId={ordenId}
      error={error}
      onConfirmar={handleConfirmar}
    />
  )
}

export default CheckoutContainer
