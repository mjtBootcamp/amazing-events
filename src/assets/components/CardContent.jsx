import CardEvent from './CardEvent';
import Checkbox_Group from './Checkbox_Group'
import { useEffect, useState } from 'react';

function CardContent(props) {

  let [events, setEvents] = useState([]) //([]) inicia en array para que haga el primer map
  let [filtedEvents, setFiltedEvents] = useState([])//idem

  const filterEvents = (text) => {
    let filtedEventsText = events.filter(event => event.name.toLowerCase().includes(text.toLowerCase()))
    if (text == "") { setFiltedEvents(events) } else { setFiltedEvents(filtedEventsText) }
  }

  useEffect(() => {
    setEvents(props.events);
    setFiltedEvents(props.events);
  }, [props.events])

  const checkEvents = () => {
    let checkBoxs = document.querySelectorAll('input[type=checkbox]');
    let checkedCategories = []
    checkBoxs.forEach(check => {
      if (check.checked) {
        checkedCategories.push(check.value)

      }
      let filtedEventsCategory = []
      events.forEach(event => {
        let includCat = checkedCategories.includes(event.category)
        if (includCat) {
          filtedEventsCategory.push(event)
        }
        setFiltedEvents(filtedEventsCategory)
      })
    })
  }
  return (
    <>
      <Checkbox_Group filterEvents={filterEvents} checkEvents={checkEvents}></Checkbox_Group>
      <section>
        <div className="container">
          <div className="row" id="contenedorCards">
            {filtedEvents.map(event => {

              return (<CardEvent event={event}></CardEvent>)

            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default CardContent;