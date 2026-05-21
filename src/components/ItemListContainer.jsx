import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
  return (
    <section className="item-list-container">
      <div className="item-list-container__hero">
        <p className="item-list-container__subtitulo">Artesanías en madera · Hecho a mano</p>
        <h1 className="item-list-container__titulo">{greeting}</h1>
        <p className="item-list-container__descripcion">
          Cada pieza nace del respeto por la madera y la tradición artesanal.
          Encontrá objetos únicos que cuentan una historia.
        </p>
      </div>
    </section>
  )
}

export default ItemListContainer
