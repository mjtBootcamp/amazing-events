import Table from 'react-bootstrap/Table';

function TableUpcoming(props) {
    let eventsPast = props.events
    let categories = [];
    eventsPast.forEach(event => {
        if (!categories.includes(event.category)) {
            categories.push(event.category)
        }
    })
    console.log(categories)
    let revenuesCategory = [];
    let assistancePercentaje = [];

    categories.forEach(categoryEvento => {
        //agrupar los eventos por categoria (filter de la categoria)
        let rowCategory = eventsPast.filter(event => event.category == categoryEvento)
        console.log(rowCategory)
        //sacar precios, array de capacidad, array de estimados o asistencia
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
        console.log("revenuesCategory", revenuesCat)
        revenuesCategory.push(revenuesCat)
        let capacityCategory = capacityArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        console.log("capacityCategory", capacityCategory)
        let assistanceCat = assistanceArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        console.log("assistanceCategory", assistanceCat)
        //calcular porcentaje
        let assistancePer = (assistanceCat * 100) / capacityCategory
        console.log("assistancePercentaje", assistancePer)
        assistancePercentaje.push(Math.round(assistancePer))
        //dibujar
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
                            console.log("1 assistancePercentaje", assistancePercentaje)
                            console.log("2 revenuesCategory", revenuesCategory)

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