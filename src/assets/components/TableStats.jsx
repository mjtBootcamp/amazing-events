import { useContext } from "react"
import StateContext from "../store/StateContext"

function TableStats() {
    let {eventsPast} = useContext(StateContext)

    let eventsApi = eventsPast
    eventsApi.forEach(ev => {
        let percentajeAss = ev.capacity ? (ev.assistance * 100) / ev.capacity : 0
        ev.assistanceP = percentajeAss;
    })
    let eventsSortLowPA = eventsApi;
    eventsSortLowPA.sort((a, b) => {
        if (a.assistanceP > b.assistanceP) { return 1; }
        if (a.assistanceP < b.assistanceP) { return -1; }
        return 0
    })
    let eventsLowAs = eventsSortLowPA.slice(0, 1)

    let eventsSortHigPA = eventsApi;
    eventsSortHigPA.sort((a, b) => {
        if (a.assistanceP < b.assistanceP) { return 1; }
        if (a.assistanceP > b.assistanceP) { return -1; }
        return 0
    })
    let eventsHigAs = eventsSortHigPA.slice(0, 1)
    
    eventsApi.sort((a, b) => {
        if (a.capacity < b.capacity) { return 1; }
        if (a.capacity > b.capacity) { return -1; }
        return 0
    })
    let eventsLagCap = eventsApi.slice(0, 1)
  return (
    <>
      <section>
        <table  className="table" id="statistic">
            <thead>
                <tr>
                    <th scope="col" >Events Statistics</th>
                </tr>
            </thead>
            <thead>
                <tr>
                    <th scope="col">event whith the highest percentage of attendance</th>
                    <th scope="col">event with the lowest percentage of attendance</th>
                    <th scope="col">event with the larger capacity</th>
                </tr>
            </thead>
            <tbody id="assistance">
            {eventsLowAs.map((stat, index)=>{
                return (<tr key={index}>
                    <td>{eventsHigAs[index]?.name}</td>
                    <td>{eventsLowAs[index]?.name}</td>
                    <td>{eventsLagCap[index]?.name}</td>
                </tr>)
            })}
            </tbody>
        </table>
    </section>
    </>
  );
}

export default TableStats;