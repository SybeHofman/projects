import "./Player.css";
import Card from "./Card.tsx";

function Player() {

    let cards = [];

    const drawCard = () => {
        let suit = Math.floor(Math.random() * 4);
        let rank = Math.floor(Math.random() * 13) + 1;

    }

    return (
        <div>
            <Card rank = {2} suit = {2}></Card>
        </div>
    )
}

export default Player;