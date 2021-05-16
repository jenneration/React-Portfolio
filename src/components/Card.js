import React from "react";
import CardInfo from "../components/CardInfo";

function Card(props) {
  return (
    // <div className="wrapperProjects">
    //     <div className="container container-jgProjects">
    <div
      className='d-inline-block g-card'
      onClick={(e) => props.click(props.item)}
    >
      <img
        className='d-inline-block g-card-image shadow p-3 mb-3 bg-body rounded'
        src={props.item.image}
        alt={props.item.name}
      />
      {props.item.selected && (
        <CardInfo
          title={props.item.name}
          subTitle={props.item.subTitle}
          codelink={props.item.codelink}
          deploylink={props.item.deploylink}
        />
      )}
    </div>
    //     </div>
    // </div>
  );
}

export default Card;
