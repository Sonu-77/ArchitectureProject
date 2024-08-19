import './App.css'
import Herobanner from './components/Herobanner'
import Navbar from './components/Navbar'
import HeroSlider from './components/HeroSlider'

function App() {
  

  return (
    <>
      
      <Navbar/>
      <Herobanner>
        <HeroSlider/>
      </Herobanner>
    </>
  )
}

export default App
