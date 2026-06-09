import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import './ItemCard.css'

const ItemCard = ({ producto }) => {
  const { id, nombre, precio, imagen } = producto

  return (
    <article className="item-card">
      <Link to={`/item/${id}`} className="item-card__link">

        <div className="item-card__imagen-wrapper">
          <img src={imagen} alt={nombre} className="item-card__imagen" />
          <div className="item-card__carrito-btn" aria-label="Agregar al carrito">
            <ShoppingBag size={18} strokeWidth={1.5} color="var(--color-crema)" />
          </div>
        </div>

        <div className="item-card__info">
          <h3 className="item-card__nombre">{nombre}</h3>
          <p className="item-card__precio">${precio.toLocaleString('es-AR')}</p>
        </div>

      </Link>
    </article>
  )
}

export default ItemCard
