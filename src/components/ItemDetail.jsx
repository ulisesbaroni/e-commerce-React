import ItemCount from './ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ producto, onAgregar }) => {
  const { nombre, categoria, precio, descripcion, imagen, stock } = producto

  return (
    <div className="item-detail">
      <div className="item-detail__imagen-wrapper">
        <img src={imagen} alt={nombre} className="item-detail__imagen" />
      </div>

      <div className="item-detail__info">
        <span className="item-detail__categoria">{categoria.replace('-', ' ')}</span>
        <h1 className="item-detail__nombre">{nombre}</h1>
        <p className="item-detail__precio">${precio.toLocaleString('es-AR')}</p>
        <p className="item-detail__descripcion">{descripcion}</p>
        <p className="item-detail__stock">Stock disponible: {stock} unidades</p>

        <ItemCount stock={stock} onAgregar={onAgregar} />
      </div>
    </div>
  )
}

export default ItemDetail
