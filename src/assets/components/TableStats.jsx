import Table from 'react-bootstrap/Table';

function TableStats(props) {
    console.log(props.events)
    let eventsApi = props.events
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
    console.log(eventsLowAs)//menor porcentaje de asistencia
    let eventsSortHigPA = eventsApi;
    eventsSortHigPA.sort((a, b) => {
        if (a.assistanceP < b.assistanceP) { return 1; }
        if (a.assistanceP > b.assistanceP) { return -1; }
        return 0
    })
    let eventsHigAs = eventsSortHigPA.slice(0, 3)
    console.log(eventsHigAs)//mayor porcentaje de asistencia
    eventsApi.sort((a, b) => {
        if (a.capacity < b.capacity) { return 1; }
        if (a.capacity > b.capacity) { return -1; }
        return 0
    })
    let eventsLagCap = eventsApi.slice(0, 3)
    console.log(eventsLagCap)
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