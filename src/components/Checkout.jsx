import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Checkout.css'

const Checkout = ({ carritoVacio, total, enviando, ordenId, error, onConfirmar }) => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onConfirmar({ nombre: nombre.trim(), email: email.trim(), telefono: telefono.trim() })
  }

  if (ordenId) {
    return (
      <div className="checkout checkout--confirmado">
        <p className="checkout__confirmado-titulo">¡Compra confirmada!</p>
        <p className="checkout__orden-id">Número de orden: <strong>{ordenId}</strong></p>
        <Link to="/" className="checkout__volver">Volver al inicio</Link>
      </div>
    )
  }

  if (carritoVacio) {
    return (
      <div className="checkout checkout--vacio">
        <h2 className="checkout__titulo">Checkout</h2>
        <p className="checkout__vacio-texto">Tu carrito está vacío, no hay nada para comprar.</p>
      </div>
    )
  }

  return (
    <form className="checkout" onSubmit={handleSubmit}>
      <h2 className="checkout__titulo">Checkout</h2>

      <div className="checkout__campo">
        <label htmlFor="nombre">Nombre completo</label>
        <input
          id="nombre"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          minLength={3}
          required
        />
      </div>

      <div className="checkout__campo">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="checkout__campo">
        <label htmlFor="telefono">Teléfono</label>
        <input
          id="telefono"
          type="tel"
          value={telefono}
          onChange={e => setTelefono(e.target.value)}
          pattern="[0-9 +-]{6,20}"
          title="Solo números, espacios, + y -"
          required
        />
      </div>

      <p className="checkout__total">Total a pagar <span>${total.toLocaleString('es-AR')}</span></p>

      {error && <p className="checkout__error">Ocurrió un error al confirmar la compra. Probá de nuevo.</p>}

      <button type="submit" className="checkout__confirmar" disabled={enviando}>
        {enviando ? 'Confirmando...' : 'Confirmar compra'}
      </button>
    </form>
  )
}

export default Checkout
