import './App.css'
import Header from './assets/components/Header'
import Carousel from './assets/components/Carousel'
import Lancamentos from './assets/components/Lancamentos'
import Lanc from './assets/components/Lanc'
import Seasons from './assets/components/Seasons.jsx'
import SeasonsImgs from './assets/components/SeasonsImgs.jsx'


//test

function App() {

  return (
    <>
    <header>
      <Header></Header>
      <Carousel></Carousel>
    </header>
    <main>
    <Lancamentos></Lancamentos>
      <Lanc></Lanc>
      <Seasons></Seasons>
      <SeasonsImgs></SeasonsImgs>
      



    </main>
    <footer>


    </footer>
    </>
  )
}

export default App