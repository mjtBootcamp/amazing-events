import CardContent from "../components/CardContent";
import Title from "../components/title";
import { useContext } from "react"
import StateContext from "../store/StateContext"

function Home() {
    let {events,titlesPages} = useContext(StateContext)
    console.log("titles ",titlesPages)
    return (
        <>
            <Title title={titlesPages?.home}></Title>
            <CardContent events={events}>

            </CardContent>
        </>
    )
}

export default Home