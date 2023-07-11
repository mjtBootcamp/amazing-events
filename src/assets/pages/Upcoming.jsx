import CardContent from "../components/CardContent";
import Title from "../components/title";

function Upcoming(props) {
    //console.log(props)
    return (
        <>
            <Title title={"Uncoming Events"}></Title>
            <CardContent events={props.events}>

            </CardContent>
        </>
    )
}

export default Upcoming