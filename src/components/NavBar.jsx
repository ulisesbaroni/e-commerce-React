import { useState } from 'react'
import logo from '../assets/logo-sendero-mistico.png'
import CartWidget from './CartWidget'
import './NavBar.css'

const categorias = ['Lámparas', 'Porta sahumerios', 'Sahumadores', 'Percheros']

const NavBar = () => {
  const [dropdownAbierto, setDropdownAbierto] = useState(false)

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

          <li
            className="navbar__item-dropdown"
            onMouseEnter={() => setDropdownAbierto(true)}
            onMouseLeave={() => setDropdownAbierto(false)}
          >
            <span className="navbar__link navbar__link--dropdown">
              Productos <span className="navbar__flecha">{dropdownAbierto ? '▴' : '▾'}</span>
            </span>

            {dropdownAbierto && (
              <ul className="navbar__dropdown">
                {categorias.map(cat => (
                  <li key={cat}>
                    <a href={`/productos/${cat.toLowerCase().replace(/ /g, '-')}`} className="navbar__dropdown-link">
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li><a href="/contacto" className="navbar__link">Contacto</a></li>
        </ul>

        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar
