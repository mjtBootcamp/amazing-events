import { useContext } from "react"
import StateContext from "../store/StateContext"

function TableUpcoming(props) {
    let {eventsUpcoming} = useContext(StateContext)
    let categories = [];
    eventsUpcoming.forEach(event => {
        if (!categories.includes(event.category)) {
            categories.push(event.category)
        }
    })
    let revenuesCategory = [];
    let assistancePercentaje = [];

    categories.forEach(categoryEvento => {
        let rowCategory = eventsUpcoming.filter(event => event.category == categoryEvento)
        let revenues = [];
        let capacityArray = [];
        let assistanceArray = [];
        rowCategory.forEach(event => {
            revenues.push(event.price * event.estimate);
            capacityArray.push(event.capacity);
            assistanceArray.push(event.estimate);
        })
        //reduce para ventas , capacidad, asistencia o estimado
        let revenuesCat = revenues.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        
        revenuesCategory.push(revenuesCat)
        let capacityCategory = capacityArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        
        let assistanceCat = assistanceArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        
        //calcular porcentaje
        let assistancePer = (assistanceCat * 100) / capacityCategory
        assistancePercentaje.push(Math.round(assistancePer))
    })
  return (
    <>
      <section>
        <table  className="table" id="upcoming">
            <thead>
                <tr>
                    <th scope="col">Upcoming events statistics by category</th>
                </tr>
            </thead>
            <thead>
                <tr>
                    <th scope="col">Categories</th>
                    <th scope="col">Revenues</th>
                    <th scope="col">Percentage of attendance</th>
                </tr>
            </thead>
            <tbody id="upcomingStats">
            {categories.map((cat, index) => {
                            return (<tr key={index}>
                                <td>{categories[index]}</td>
                                <td className="row justify-content-center"> $ {revenuesCategory[index]}</td>
                                <td>{assistancePercentaje[index]}%</td>
                            </tr>)
                        })}
            </tbody>
        </table>
    </section>
    </>
  );
}

export default TableUpcoming;