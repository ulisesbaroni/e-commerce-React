import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShoppingBag, Menu, X, ChevronRight } from 'lucide-react'
import { useCart } from '../context/CartContext'
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
  const { cantidadTotal } = useCart()

  const cerrarDrawer = () => {
    setDrawerAbierto(false)
    setProductosAbierto(false)
  }

  const CarritoIcono = () => (
    <div className="cart-widget__contenedor">
      <ShoppingBag size={22} strokeWidth={1.5} color="var(--color-crema)" />
      {cantidadTotal > 0 && <span className="cart-widget__badge">{cantidadTotal}</span>}
    </div>
  )

  return (
    <>
      <nav className="navbar">
        <div className="navbar__inner">

          <div className="navbar__fila-superior">
            <button
              className="navbar__accion-btn navbar__hamburguesa"
              onClick={() => setDrawerAbierto(true)}
              aria-label="Abrir menú"
            >
              <Menu size={22} color="var(--color-crema)" />
            </button>

            <Link to="/" className="navbar__logo" onClick={cerrarDrawer}>
              <img src={logo} alt="Sendero Místico Atelier" className="navbar__logo-img" />
            </Link>

            <Link
              to="/carrito"
              className="navbar__accion-btn navbar__carrito-mobile"
              aria-label="Ver carrito"
              onClick={cerrarDrawer}
            >
              <CarritoIcono />
            </Link>
          </div>

          <div className="navbar__fila-links">
            <ul className="navbar__links">
              <li>
                <NavLink to="/" end className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--activo' : ''}`}>
                  Inicio
                </NavLink>
              </li>
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
                        <NavLink
                          to={`/categoria/${cat.id}`}
                          className={({ isActive }) => `navbar__dropdown-link ${isActive ? 'navbar__dropdown-link--activo' : ''}`}
                          onClick={() => setDropdownAbierto(false)}
                        >
                          {cat.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>

            <Link to="/carrito" className="navbar__accion-btn navbar__carrito-desktop" aria-label="Ver carrito">
              <CarritoIcono />
            </Link>
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
            <NavLink
              to="/"
              end
              className={({ isActive }) => `navbar__drawer-link ${isActive ? 'navbar__drawer-link--activo' : ''}`}
              onClick={cerrarDrawer}
            >
              Inicio
            </NavLink>
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
                    <NavLink
                      to={`/categoria/${cat.id}`}
                      className={({ isActive }) => `navbar__drawer-categoria-link ${isActive ? 'navbar__drawer-categoria-link--activo' : ''}`}
                      onClick={cerrarDrawer}
                    >
                      {cat.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </>
  )
}

export default NavBar
