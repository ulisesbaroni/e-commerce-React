import './Loader.css'

const Loader = ({ texto = 'Cargando...' }) => (
  <div className="loader">
    <div className="loader__spinner" />
    <p className="loader__texto">{texto}</p>
  </div>
)

export default Loader
