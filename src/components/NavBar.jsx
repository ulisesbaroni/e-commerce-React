import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Menu, X, ChevronRight } from 'lucide-react'
import logo from '../assets/logo-sendero-mistico.png'
import './NavBar.css'

const categorias = [
  { label: 'Lámparas', id: 'lamparas' },
  { label: 'Porta sahumerios', id: 'porta-sahumerios' },
  { label: 'Sahumadores', id: 'sahumadores' },
  { label: 'Percheros', id: 'percheros' },
]

const NavBar = () => {
  const [drawerAbierto, setDrawerAbierto] = useState(false)
  const [productosAbierto, setProductosAbierto] = useState(false)
  const [dropdownAbierto, setDropdownAbierto] = useState(false)
  const cantidad = 3

  const cerrarDrawer = () => {
    setDrawerAbierto(false)
    setProductosAbierto(false)
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar__inner">

          {/* Logo */}
          <Link to="/" className="navbar__logo" onClick={cerrarDrawer}>
            <img src={logo} alt="Sendero Místico Atelier" className="navbar__logo-img" />
          </Link>

          {/* Links — solo desktop */}
          <ul className="navbar__links">
            <li><Link to="/" className="navbar__link">Inicio</Link></li>
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
                    <li key={cat.id}>
                      <Link
                        to={`/categoria/${cat.id}`}
                        className="navbar__dropdown-link"
                        onClick={() => setDropdownAbierto(false)}
                      >
                        {cat.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li><Link to="/contacto" className="navbar__link">Contacto</Link></li>
          </ul>

          {/* Iconos derecha */}
          <div className="navbar__acciones">
            <button className="navbar__accion-btn" aria-label="Ver carrito">
              <div className="cart-widget__contenedor">
                <ShoppingBag size={22} strokeWidth={1.5} color="var(--color-crema)" />
                {cantidad > 0 && <span className="cart-widget__badge">{cantidad}</span>}
              </div>
            </button>

            {/* Hamburguesa — solo mobile */}
            <button
              className="navbar__accion-btn navbar__hamburguesa"
              onClick={() => setDrawerAbierto(true)}
              aria-label="Abrir menú"
            >
              <Menu size={22} color="var(--color-crema)" />
            </button>
          </div>

        </div>
      </nav>

      {/* Overlay */}
      {drawerAbierto && (
        <div className="navbar__overlay" onClick={cerrarDrawer} />
      )}

      {/* Drawer mobile */}
      <div className={`navbar__drawer ${drawerAbierto ? 'navbar__drawer--abierto' : ''}`}>
        <button className="navbar__drawer-cerrar" onClick={cerrarDrawer} aria-label="Cerrar menú">
          <X size={24} color="var(--color-tierra)" />
        </button>

        <ul className="navbar__drawer-links">
          <li>
            <Link to="/" className="navbar__drawer-link" onClick={cerrarDrawer}>
              Inicio
            </Link>
          </li>

          <li>
            <button
              className="navbar__drawer-link navbar__drawer-link--toggle"
              onClick={() => setProductosAbierto(v => !v)}
            >
              Productos
              <ChevronRight
                size={18}
                className={`navbar__drawer-chevron ${productosAbierto ? 'navbar__drawer-chevron--abierto' : ''}`}
              />
            </button>

            {productosAbierto && (
              <ul className="navbar__drawer-categorias">
                {categorias.map(cat => (
                  <li key={cat.id}>
                    <Link
                      to={`/categoria/${cat.id}`}
                      className="navbar__drawer-categoria-link"
                      onClick={cerrarDrawer}
                    >
                      {cat.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link to="/contacto" className="navbar__drawer-link" onClick={cerrarDrawer}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default NavBar
