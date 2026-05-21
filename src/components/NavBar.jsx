import logo from '../assets/logo-sendero-mistico.png'
import CartWidget from './CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <div className="navbar__logo">
          <img
            src={logo}
            alt="Sendero Místico Atelier"
            className="navbar__logo-img"
          />
        </div>

        <ul className="navbar__links">
          <li><a href="/" className="navbar__link">Inicio</a></li>
          <li><a href="/productos" className="navbar__link">Productos</a></li>
          <li><a href="/contacto" className="navbar__link">Contacto</a></li>
        </ul>

        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar
