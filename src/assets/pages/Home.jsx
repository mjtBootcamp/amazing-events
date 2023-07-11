import CardContent from "../components/CardContent";
import Title from "../components/title";

function Home(props) {
    return (
        <>
            <Title title={"Home"}></Title>
            <CardContent events={props.events}>

            </CardContent>
        </>
    )
}

export default Home