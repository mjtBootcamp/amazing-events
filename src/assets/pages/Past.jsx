import CardContent from "../components/CardContent";
import Title from "../components/title";

function Past(props) {
    return (
        <>
            <Title title={"Past Events"}></Title>
            <CardContent events={props.events}>

            </CardContent>
        </>
    )
}

export default Past