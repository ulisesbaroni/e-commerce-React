import { Handbag } from 'lucide-react'
import './CartWidget.css'

const CartWidget = () => {
  // Por ahora la cantidad la pongo estática, en próximas entregas será con contexto
  const cantidad = 3

  return (
    <button className="cart-widget" aria-label="Ver carrito">
      <div className="cart-widget__contenedor">
        <Handbag size={24} strokeWidth={1.5} color="var(--color-crema)" />
        {cantidad > 0 && (
          <span className="cart-widget__badge">{cantidad}</span>
        )}
      </div>
    </button>
  )
}

export default CartWidget