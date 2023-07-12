import { useState } from "react";
import StateContent from "./StateContext"
const StateProvider = ({children}) => {
    let [events,setEvents]=useState([])
    let [event, setEvent]=useState({assistance:0,
        capacity:0,
        category:"",
        date:"",
        description:"",
        image:"",
        name:"",
        place:"",
        price:0,
        _id:0})
    const getPastEvents = () => {
        console.log("Eventos pasados")
    }
    const getEventsNames=()=>{
        return initialState.events.map(event=>event.name)
    }
    const loadEvents = (events) => {
        console.log("loadEvents()");
        setEvents(events)
    }
   
    const initialState = {
        events:[],
        event,
            getEventsNames,
            getPastEvents,
            loadEvents
    }

    return (
        <StateContent.Provider value={initialState}>
            {children}
        </StateContent.Provider>
    )
}
export default StateProvider;