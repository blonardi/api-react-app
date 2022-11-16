import reactLogo from './assets/react.svg'
import './App.css'
import Menu from './components/Menu/menu.jsx'
import Home from './components/Home/home.jsx'
import Personajes from './components/personajes.jsx'
import Episodios from './components/episodios.jsx'
import Citas from './components/citas.jsx'
import Footer from './components/Footer/footer.jsx'

function App() {
  const currentURL = window.location.pathname
  function renderContent(){
    switch(currentURL){
      case "/":
        return <Home/>
      case "/personajes":
        return <Personajes/>
      case "/episodios":
        return <Episodios/>
      case "/citas": 
      return <Citas/>
    default:
      return <Home/>
    }
  }
  return (
    <div className="App">
      <Menu/>
      <main>
        {renderContent()}
      </main>
      <Footer/>
    </div>
  )
}

export default App
