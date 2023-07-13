import CardContent from "../components/CardContent";
import Title from "../components/title";
import { useContext } from "react"
import StateContext from "../store/StateContext"

function Upcoming() {
    let {eventsUpcoming} = useContext(StateContext)
    return (
        <>
            <Title title={"Uncoming Events"}></Title>
            <CardContent events={eventsUpcoming}>

            </CardContent>
        </>
    )
}

export default Upcoming