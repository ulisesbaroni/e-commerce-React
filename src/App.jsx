import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <ItemListContainer greeting="Bienvenidos al Sendero Místico" />
      </main>
    </>
  )
}

export default App
