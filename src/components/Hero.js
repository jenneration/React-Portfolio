import React from "react";
import Row from "../components/Row";
import Column from "../components/Column";

function Hero(props) {
    <div className="jumbotron bg-transparent jumbotron-fluid p-0">
        <div className="container-fluid">
            <Row className="justify-content-center">
                <Column className="col-md-6 col-sm-12 ">
                    {props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>}
                    {props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3>}
                    {props.text && <h3 className="lead font-weight-light">{props.text}</h3>}
                </Column>
            </Row>
        </div>
    </div>
}

export default Hero;