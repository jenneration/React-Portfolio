import React from "react";
import CardInfo from "../components/CardInfo"

function Card(props) {
    return (
        <div className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>
            <img className="g-card-image" src={props.item.image} alt={props.item.name} />
            {props.item.selected && <CardInfo title={props.item.name} subTitle={props.item.subTitle} codelink={props.item.codelink} deploylink={props.item.deploylink} />}
        </div>
    )
}

export default Card;