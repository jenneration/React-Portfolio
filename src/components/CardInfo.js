import React from "react";
import { useSpring, animated } from "react-spring";


function CardInfo(props) {

    const style = useSpring({ opacity: 1, from: { opacity: 0 } });



    return (
        <animated.div className="g-card-info" style={style}>
            <p className="g-card-title">{props.title}</p>
            <p className="g-card-sub-title">{props.subTitle}</p>
            <a className="g-card-sub-title" href={props.codelink} target="_blank" rel="noopener noreferrer">See the code</a>
            <a className="g-card-sub-title" href={props.deploylink} target="_blank" rel="noopener noreferrer">See project</a>
        </animated.div>
    );

}

export default CardInfo;