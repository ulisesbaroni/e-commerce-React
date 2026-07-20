import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from './firebase'

export const crearOrden = async ({ comprador, items, total }) => {
  const ordenesRef = collection(db, 'ordenes')
  const docRef = await addDoc(ordenesRef, {
    comprador,
    items: items.map(({ id, nombre, precio, cantidad }) => ({ id, nombre, precio, cantidad })),
    total,
    fecha: serverTimestamp(),
  })
  return docRef.id
}
