import CardEvent from './CardEvent';
import Checkbox_Group from './Checkbox_Group'
import { useContext, useEffect, useState } from 'react';
import StateContext from "../store/StateContext"

function CardContent(props) {
  let {events} = useContext(StateContext)
  let [eventos, setEvents] = useState([]) //([]) inicia en array para que haga el primer map
  let [filtedEvents, setFiltedEvents] = useState([])//idem

  useEffect(() => {
    setEvents(props.events);
    setFiltedEvents(props.events);
  }, [props.events])

  const filtrarEventos = () => {
    let checkBoxs = document.querySelectorAll('input[type=checkbox]');
    let checkedCategories = []
    checkBoxs.forEach(check => { if (check.checked) checkedCategories.push(check.value) })
    let textInputValue = document.getElementById("textsearch").value
    console.log(checkBoxs);
    console.log(checkedCategories);
    console.log(textInputValue);
    if (textInputValue == "" && checkedCategories.length == 0) {
      console.log("1 - Sin texto / Sin categoria");
      setFiltedEvents(events)
    }
    if (textInputValue != "" && checkedCategories.length == 0) {
      console.log("2 - Texto / Sin categoria");
      let filtedEventsText = events.filter(event => event.name.toLowerCase().includes(textInputValue.toLowerCase()))
      setFiltedEvents(filtedEventsText)
    }
    if (textInputValue == "" && checkedCategories.length != 0) {
      console.log("3 - Sin texto / Con categoria");
      let filtedEvensChecked = events.filter(event => checkedCategories.includes(event.category))
      setFiltedEvents(filtedEvensChecked)
    }
    if (textInputValue != "" && checkedCategories.length != 0) {
      console.log("4 - Con texto / Con categoria");
      let filtedEvensTextAndCheckBoxs = events.filter(event => event.name.toLowerCase().includes(textInputValue.toLowerCase()) && checkedCategories.includes(event.category))
      setFiltedEvents(filtedEvensTextAndCheckBoxs)
    }
  }
  return (
    <>
      <Checkbox_Group filtrarEventos={filtrarEventos}></Checkbox_Group>
      <section>
        <div className="container">
          <div className="row" id="contenedorCards">
            {filtedEvents.map((event, index) => {

              return (<CardEvent key={index} event={event}></CardEvent>)

            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default CardContent;