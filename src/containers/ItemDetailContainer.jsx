import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducto } from '../services/productos'
import ItemDetail from '../components/ItemDetail'
import NotFound from '../components/NotFound'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)
  const { itemId } = useParams()

  useEffect(() => {
    setCargando(true)
    setError(false)
    getProducto(itemId)
      .then(data => setProducto(data))
      .catch(() => setError(true))
      .finally(() => setCargando(false))
  }, [itemId])

  const handleAgregar = (cantidad) => {
    // Por ahora solo lo loguea — en la Etapa 3 conecta con el contexto del carrito
    console.log(`Agregado: ${cantidad} x ${producto.nombre}`)
  }

  if (cargando) return <p className="detail-container__loading">Cargando producto...</p>
  if (error) return <NotFound />

  return <ItemDetail producto={producto} onAgregar={handleAgregar} />
}

export default ItemDetailContainer
