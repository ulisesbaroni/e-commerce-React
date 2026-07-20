import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducto } from '../services/productos'
import { useCart } from '../context/CartContext'
import ItemDetail from '../components/ItemDetail'
import NotFound from '../components/NotFound'
import Loader from '../components/Loader'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)
  const { itemId } = useParams()
  const { agregarAlCarrito } = useCart()

  useEffect(() => {
    setCargando(true)
    setError(false)
    getProducto(itemId)
      .then(data => setProducto(data))
      .catch(() => setError(true))
      .finally(() => setCargando(false))
  }, [itemId])

  const handleAgregar = (cantidad) => {
    agregarAlCarrito(producto, cantidad)
  }

  if (cargando) return <Loader texto="Cargando producto..." />
  if (error) return <NotFound />

  return <ItemDetail producto={producto} onAgregar={handleAgregar} />
}

export default ItemDetailContainer
