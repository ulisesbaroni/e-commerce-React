import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductos } from '../services/productos'
import ItemList from '../components/ItemList'

const categoriaLabel = {
  'lamparas': 'Lámparas',
  'porta-sahumerios': 'Porta sahumerios',
  'sahumadores': 'Sahumadores',
  'percheros': 'Percheros',
}

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const { categoriaId } = useParams()

  useEffect(() => {
    setCargando(true)
    getProductos(categoriaId)
      .then(data => setProductos(data))
      .finally(() => setCargando(false))
  }, [categoriaId])

  const titulo = categoriaId ? categoriaLabel[categoriaId] : 'Todos los productos'

  return <ItemList productos={productos} titulo={titulo} cargando={cargando} />
}

export default ItemListContainer
