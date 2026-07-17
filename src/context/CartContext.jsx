import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (producto, cantidad) => {
    setCarrito(prev => {
      const yaExiste = prev.find(item => item.id === producto.id)
      if (yaExiste) {
        return prev.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        )
      }
      return [...prev, { ...producto, cantidad }]
    })
  }

  const quitarDelCarrito = (id) => {
    setCarrito(prev => prev.filter(item => item.id !== id))
  }

  const vaciarCarrito = () => setCarrito([])

  const cantidadTotal = carrito.reduce((total, item) => total + item.cantidad, 0)
  const precioTotal = carrito.reduce((total, item) => total + item.precio * item.cantidad, 0)

  const value = {
    carrito,
    agregarAlCarrito,
    quitarDelCarrito,
    vaciarCarrito,
    cantidadTotal,
    precioTotal,
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
