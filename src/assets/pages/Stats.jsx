import TableStats from "../components/TableStats"
import TableUpcoming from "../components/TableUpcoming"
import TablePast from "../components/TablePast"
import Title from "../components/title";
import axios from 'axios'
import { useEffect, useState } from 'react'

function Stats(props) {
    const URL = "https://mindhub-xj03.onrender.com/api/amazing"
    let [events, setEvents] = useState([])

    useEffect(() => {
        axios.get(URL).then(response => {
            setEvents(response.data.events);
        })
    }, [])

    //console.log("events", events)
    let eventsPast = events.filter(event => event.hasOwnProperty("assistance"))
    let eventsUpcoming = events.filter(event => event.hasOwnProperty("estimate"))
    console.log("eventsPast", eventsPast)
    console.log("eventsUpcoming", eventsUpcoming)
    return (
        <>
            <div class="row">
                <div class="col">
                </div>
                <div class="col-6">
                    <Title title={"Stadistics"}></Title>
                    <TableStats events={eventsPast}></TableStats>
                    <TableUpcoming events={eventsUpcoming}></TableUpcoming>
                    <TablePast events={eventsPast}></TablePast>
                </div>
                <div class="col">
                </div>
            </div>
        </>
    )
}

export default Stats