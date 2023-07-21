import Navegation from './assets/components/Navegation'
import './App.css'
import Checkbox_Group from './assets/components/Checkbox_Group'
import Footer from './assets/components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Past from './assets/pages/Past'
import Home from './assets/pages/Home'
import Upcoming from './assets/pages/Upcoming'
import Contact from './assets/pages/Contact'
import Detail from './assets/pages/Detail'
import Stats from './assets/pages/Stats'
import Login from './assets/pages/Login'
import Register from './assets/pages/Register'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import StateContext from "../src/assets/store/StateContext"
function App() {
  //const URL = "https://mindhub-xj03.onrender.com/api/amazing"
  const URL = "http://localhost:3000/api/events"
  let [events, setEvents] = useState([])
  let {loadEvents,loadEventsPast, loadEventsUpcoming, loadTitles}=useContext(StateContext)//Busca si este o algun padre estan dentro de un proveedor

  //let titlesPages = {home:"Home", past:"Past Events", uncoming:"Uncoming Events", stats:"Stadistics to Events"}
        
  useEffect(() => {
    axios.get(URL).then(response => {
      console.log(response)
      loadEvents(response.data);
      loadEventsPast(response.data);
      loadEventsUpcoming(response.data);
    });
    //loadTitles(titlesPages)
  }, [])
  
  return (
    <>
      <Router>
        <Navegation></Navegation>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/past" element={<Past></Past>} />
          <Route path="/upcoming" element={<Upcoming></Upcoming>} />
          <Route path="/stats" element={<Stats></Stats>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/detail/:id" element={<Detail></Detail>} />

          <Route path="*" element={<h1>La pagina no existe</h1>} />
        </Routes>

        <Footer></Footer>
      </Router>
    </>
  )
}

export default App
