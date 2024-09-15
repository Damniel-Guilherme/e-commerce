import './App.css'
import Header from './assets/components/header/Header'
import Carousel from './assets/components/main/Carousel'
import Collections from './assets/components/main/Collections'
import Roupas from './assets/components/main/Roupas'



function App() {

  return (
    <>
    <header>
      <Header></Header>
    </header>

    <main>
    <Carousel></Carousel>
    <Collections></Collections>
    <Roupas></Roupas>

      



    </main>

    <footer>


    </footer>
    </>
  )
}

export default App