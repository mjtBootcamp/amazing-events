import CardContent from "../components/CardContent";
import Title from "../components/title";
import { useContext } from "react";
import StateContext from "../store/StateContext";

function Home() {
    let {events,loadTitle} = useContext(StateContext)
    loadTitle("Home")
    return (
        <>
            <Title></Title>
            <CardContent events={events}>

            </CardContent>
        </>
    )
}

export default Home