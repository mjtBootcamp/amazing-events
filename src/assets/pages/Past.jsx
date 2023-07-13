import CardContent from "../components/CardContent";
import Title from "../components/title";
import { useContext } from "react"
import StateContext from "../store/StateContext"

function Past() {
    let {eventsPast} = useContext(StateContext)
    return (
        <>
            <Title title={"Past Events"}></Title>
            <CardContent events={eventsPast}>

            </CardContent>
        </>
    )
}

export default Past