import ItemCard from './ItemCard'
import Loader from './Loader'
import './ItemList.css'

const ItemList = ({ productos, titulo, cargando }) => {
  return (
    <section>
      <div className="item-list__header">
        <h2 className="item-list__titulo">{titulo}</h2>
        {!cargando && (
          <p className="item-list__cantidad">{productos.length} productos</p>
        )}
      </div>

      {cargando ? (
        <Loader texto="Cargando productos..." />
      ) : productos.length === 0 ? (
        <p className="item-list__vacio">No hay productos en esta categoría.</p>
      ) : (
        <div className="item-list__grid">
          {productos.map(producto => (
            <ItemCard key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </section>
  )
}

export default ItemList
