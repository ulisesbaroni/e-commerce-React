# Sendero Místico

E-commerce de artesanías en madera (lámparas, porta sahumerios, sahumadores y percheros). Proyecto final de la Diplomatura en React JS.

## Stack

- React 18 + Vite
- React Router v6
- Context API (estado global del carrito)
- Firebase / Cloud Firestore (productos y órdenes)
- CSS puro, mobile first
- Lucide React (íconos)

## Funcionalidades

- Catálogo de productos con filtro por categoría
- Detalle de producto con selector de cantidad (validado por stock mínimo/máximo)
- Carrito de compras global (Context API): agregar, quitar, vaciar, totales
- Checkout con formulario de datos del comprador
- Persistencia en Firestore: los productos se leen desde la colección `productos`, y cada compra confirmada genera un documento en la colección `ordenes`, mostrando su ID al usuario
- Renderizado condicional: loaders, "sin stock", "carrito vacío", "sin productos en esta categoría", errores de checkout

## Estructura del proyecto

```
src/
├── components/     → componentes de presentación
├── containers/     → manejo de estado y fetch de datos
├── context/        → CartContext (estado global del carrito)
├── services/       → conexión a Firebase (firebase.js, productos.js, ordenes.js)
└── assets/
scripts/            → script de carga inicial de productos a Firestore
```

## Rutas

| Ruta | Descripción |
|---|---|
| `/` | Catálogo completo |
| `/categoria/:categoriaId` | Catálogo filtrado por categoría |
| `/item/:itemId` | Detalle de producto |
| `/carrito` | Carrito de compras |
| `/checkout` | Formulario de compra y confirmación de orden |

## Cómo correrlo localmente

1. Instalar dependencias:
   ```
   npm install
   ```
2. Crear un archivo `.env` en la raíz (basado en `.env.example`) con las credenciales de tu proyecto de Firebase:
   ```
   VITE_FIREBASE_API_KEY=
   VITE_FIREBASE_AUTH_DOMAIN=
   VITE_FIREBASE_PROJECT_ID=
   VITE_FIREBASE_STORAGE_BUCKET=
   VITE_FIREBASE_MESSAGING_SENDER_ID=
   VITE_FIREBASE_APP_ID=
   ```
3. En Firestore, crear las colecciones `productos` y `ordenes` con estas reglas de seguridad:
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /productos/{productoId} {
         allow read: if true;
         allow write: if false;
       }
       match /ordenes/{ordenId} {
         allow create: if true;
         allow read, update, delete: if false;
       }
     }
   }
   ```
4. Cargar los productos de ejemplo (solo la primera vez, requiere permisos de escritura temporales en `productos`):
   ```
   node scripts/seedProductos.mjs
   ```
5. Levantar el servidor de desarrollo:
   ```
   npm run dev
   ```

## Autor

Ulises Baroni
