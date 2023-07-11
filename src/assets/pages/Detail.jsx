import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

function Detail() {
    let params = useParams()
    const URL = "https://mindhub-xj03.onrender.com/api/amazing"
    let [events, setEvents] = useState([])

    useEffect(() => {
        axios.get(URL).then(response => {
            setEvents(response.data.events);
            console.log(response.data.events)
        })
    }, [])

    let id = events.filter(event => event._id == params.id)
    let event = id[0];

    return (
        <>
            <div className="card bg-dark text-white">
                <img className="card-img" src={event?.image} alt="Card image" style={{ height: "auto" }} />
                <div className="card-img-overlay">
                    <h5 className="card-title">{event?.name} {params.id}</h5>
                    <p className="card-text">{event?.description}</p>

                </div>
            </div>
        </>
    )
}
export default Detail