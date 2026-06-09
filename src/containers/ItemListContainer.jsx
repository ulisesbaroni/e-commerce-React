import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductos } from '../services/productos'
import ItemList from '../components/ItemList'
import './ItemListContainer.css'

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

  return (
    <section>
      <div className="list-container__header">
        <h2 className="list-container__titulo">{titulo}</h2>
        {!cargando && (
          <p className="list-container__cantidad">{productos.length} productos</p>
        )}
      </div>

      {cargando ? (
        <p className="list-container__loading">Cargando productos...</p>
      ) : (
        <ItemList productos={productos} />
      )}
    </section>
  )
}

export default ItemListContainer
