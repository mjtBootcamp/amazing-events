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
import axios from 'axios'
import { useEffect, useState } from 'react'
function App() {
  /*  let eventsPrueba = [{
     _id: 1,
     name: "Evento prueba1",
     description: "descripcion prueba1",
     price: 10,
     assistance: 42756,
     capacity: 50000,
     category: "Food",
     date: "2021-12-12",
     description: "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
     image: "https://i.postimg.cc/kXWrBjXC/collectivities-party.jpg",
     name: "Collectivities Party",
     place: "Multi Space",
 
   }, {
     assistance: 6589,
     capacity: 10000,
     category: "Museum",
     date: "2022-07-05",
     description: "Let's go meet the biggest dinosaurs in the paleontology museum.",
     image: "https://i.postimg.cc/nrQkSwwh/jurassic-park.jpg",
     name: "Jurassic Park",
     place: "Field",
     price: 3,
     _id: 2
   }, {
     assistance: 497981,
     capacity: 500000,
     category: "Concert",
     date: "2022-01-22",
     description: "The only concert of the most emblematic band in the world.",
     image: "https://i.postimg.cc/XvQQr5C4/metallica-concert.jpg",
     name: "Metallica in concert",
     place: "Stadium",
     price: 20,
     _id: 3
   }] */
  const URL = "https://mindhub-xj03.onrender.com/api/amazing"
  let [events, setEvents] = useState([])

  useEffect(() => {
    axios.get(URL).then(response => {
      setEvents(response.data.events);
    })
  }, [])

  let eventsPast = events.filter(event => event.hasOwnProperty("assistance"))
  let eventsUpcoming = events.filter(event => event.hasOwnProperty("estimate"))

  return (
    <>
      <Router>
        <Navegation></Navegation>
        {/* <Checkbox_Group /> */}
        <Routes>
          <Route path="/" element={<Home events={events}></Home>} />
          <Route path="/past" element={<Past events={eventsPast}></Past>} />
          <Route path="/upcoming" element={<Upcoming events={eventsUpcoming}></Upcoming>} />
          <Route path="/stats" element={<Stats events={events}></Stats>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/detail/:id" element={<Detail></Detail>} />

          <Route path="*" element={<h1>La pagina no existe</h1>} />
        </Routes>

        <Footer></Footer>
      </Router>
    </>
  )
}

export default App
