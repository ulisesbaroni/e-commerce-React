import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Checkout.css'

const Checkout = ({ total, enviando, ordenId, error, onConfirmar }) => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onConfirmar({ nombre, email, telefono })
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

  return (
    <form className="checkout" onSubmit={handleSubmit}>
      <div className="checkout__campo">
        <label htmlFor="nombre">Nombre completo</label>
        <input id="nombre" value={nombre} onChange={e => setNombre(e.target.value)} required />
      </div>

      <div className="checkout__campo">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </div>

      <div className="checkout__campo">
        <label htmlFor="telefono">Teléfono</label>
        <input id="telefono" value={telefono} onChange={e => setTelefono(e.target.value)} required />
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
