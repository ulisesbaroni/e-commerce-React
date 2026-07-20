import { collection, getDocs, getDoc, doc, query, where } from 'firebase/firestore'
import { db } from './firebase'

export const getProductos = async (categoria) => {
  const productosRef = collection(db, 'productos')
  const q = categoria ? query(productosRef, where('categoria', '==', categoria)) : productosRef
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

export const getProducto = async (id) => {
  const productoRef = doc(db, 'productos', id)
  const snapshot = await getDoc(productoRef)
  if (!snapshot.exists()) {
    throw new Error('Producto no encontrado')
  }
  return { id: snapshot.id, ...snapshot.data() }
}
