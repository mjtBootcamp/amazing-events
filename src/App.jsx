import Navegation from './assets/components/Navegation'
import './App.css'
import Footer from './assets/components/Footer'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import Past from './assets/pages/Past'
import Home from './assets/pages/Home'
import Upcoming from './assets/pages/Upcoming'
import Contact from './assets/pages/Contact'
import Detail from './assets/pages/Detail'
import Stats from './assets/pages/Stats'
import Login from './assets/pages/Login'
import LogOut from './assets/pages/LogOut'
import Register from './assets/pages/Register'
import RegisterEvent from "./assets/pages/RegisterEvents"
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import StateContext from "../src/assets/store/StateContext"
function App() {
  //const URL = "https://mindhub-xj03.onrender.com/api/amazing"
  const URL = "http://localhost:3000/api/events"
  let [events, setEvents] = useState([])
  let {loadEvents,loadEventsPast, loadEventsUpcoming, loadTitles}=useContext(StateContext)//Busca si este o algun padre estan dentro de un proveedor
  let navigate = useNavigate()
  //let titlesPages = {home:"Home", past:"Past Events", uncoming:"Uncoming Events", stats:"Stadistics to Events"}
        
  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get(URL).then(response => {
      console.log(response)
      loadEvents(response.data);
      loadEventsPast(response.data);
      loadEventsUpcoming(response.data);
    })
    .catch(error=>{
      navigate("/login")
    })
    //loadTitles(titlesPages)
  }, [])
  
  return (
    <>
      {/* <Router> */}
        <Navegation></Navegation>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/past" element={<Past></Past>} />
          <Route path="/upcoming" element={<Upcoming></Upcoming>} />
          <Route path="/stats" element={<Stats></Stats>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/logout" element={<LogOut></LogOut>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/registerevent" element={<RegisterEvent></RegisterEvent>} />
          <Route path="/detail/:id" element={<Detail></Detail>} />

          <Route path="*" element={<h1>La pagina no existe</h1>} />
        </Routes>

        <Footer></Footer>
      {/* </Router> */}
    </>
  )
}

export default App
