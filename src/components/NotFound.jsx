import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="not-found">
      <p className="not-found__codigo">404</p>
      <h1 className="not-found__titulo">Página no encontrada</h1>
      <p className="not-found__mensaje">El sendero que buscás no existe o fue movido.</p>
      <Link to="/" className="not-found__link">Volver al inicio</Link>
    </div>
  )
}

export default NotFound
