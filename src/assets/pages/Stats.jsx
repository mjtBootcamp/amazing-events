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
    
    return (
        <>
            <div className="row">
                <div className="col">
                </div>
                <div className="col-6">
                    <Title title={"Stadistics"}></Title>
                    <TableStats></TableStats>
                    <TableUpcoming></TableUpcoming>
                    <TablePast></TablePast>
                </div>
                <div className="col">
                </div>
            </div>
        </>
    )
}

export default Stats