import { useState } from "react";
import StateContent from "./StateContext"
const StateProvider = ({ children }) => {
    let [events, setEvents] = useState([]);
    let [eventsPast, setEventsPast] = useState([]);
    let [title, setTitle] = useState("Home")
    let [eventsUpcoming, setEventsUpcoming] = useState([])
    let [event, setEvent] = useState({
        assistance: 0,
        capacity: 0,
        category: "",
        date: "",
        description: "",
        image: "",
        name: "",
        place: "",
        price: 0,
        _id: 0
    })
    const getPastEvents = () => {
        console.log("Eventos pasados")
    }
    const getEventsNames = () => {
        return initialState.events.map(event => event.name)
    }
    const loadEvents = (eventsApi) => {
        console.log("loadEvents()");
        setEvents(eventsApi)
    }
    const loadEventsPast = (eventsApi) => {
        let eventsPast = eventsApi.filter(event => event.hasOwnProperty("assistance"))
        setEventsPast(eventsPast)
    }
    const loadEventsUpcoming = (eventsApi) => {
        let eventsUpcoming = eventsApi.filter(event => event.hasOwnProperty("estimate"))
        setEventsUpcoming(eventsUpcoming)
    }
    const loadTitle = (title) => {
        console.log(title);
        setTitle(title)
    }
    const initialState = {
        events,
        eventsPast,
        eventsUpcoming,
        event,
        title,
        getEventsNames,
        getPastEvents,
        loadEvents,
        loadEventsPast,
        loadEventsUpcoming,
        loadTitle
    }

    return (
        <StateContent.Provider value={initialState}>
            {children}
        </StateContent.Provider>
    )
}
export default StateProvider;