import "./Card.css";

interface Cardprops {
    rank: number;
    suit: number;
}

function Card({rank, suit} : Cardprops) {
    let rankMap = new Map<number, string>();
    rankMap.set(1, "ace");
    rankMap.set(11, "jack");
    rankMap.set(12, "queen");
    rankMap.set(13, "king");

    let suitMap = new Map<number, string>();
    suitMap.set(0, "spades");
    suitMap.set(1, "hearts");
    suitMap.set(2, "clubs");
    suitMap.set(3, "diamonds");

    let rankString = rankMap.get(rank) || rank.toString();
    let suitString = suitMap.get(suit);

    let isFace = rankString != rank.toString() && rankString != "ace";

    return (
        <div>
            <img alt = {rankString + " of " + suitString} src= {"../assets/SVG-Cards/2_of_clubs.svg"}></img>
        </div>
    )
}

export default Card;