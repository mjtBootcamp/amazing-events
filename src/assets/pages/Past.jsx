import CardContent from "../components/CardContent";
import Title from "../components/title";
import { useContext } from "react"
import StateContext from "../store/StateContext"

function Past() {
    let {eventsPast,loadTitle} = useContext(StateContext)
    loadTitle("Past Events")
    return (
        <>
            <Title></Title>
            <CardContent events={eventsPast}>

            </CardContent>
        </>
    )
}

export default Past