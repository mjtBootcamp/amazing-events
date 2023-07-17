import CardContent from "../components/CardContent";
import Title from "../components/title";
import { useContext } from "react"
import StateContext from "../store/StateContext"

function Upcoming() {
    let {eventsUpcoming,loadTitle} = useContext(StateContext)
    loadTitle("Upcoming Events")
    return (
        <>
            <Title></Title>
            <CardContent events={eventsUpcoming}>

            </CardContent>
        </>
    )
}

export default Upcoming