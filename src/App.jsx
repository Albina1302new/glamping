


import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Navigation/Header'
import Forside from './pages/Forside/Forside'
import Ophold from './pages/Ophold/Ophold'
import Routes from "./routes/Routes";

function App() {


  return (
    <>
      <Header />
      {/* <Forside />
      <Ophold /> */}
      
      

      <Routes/>
      <Footer />
    </>
  );
}

export default App
