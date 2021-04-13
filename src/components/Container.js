import React from "react";

function Container(props) {
    return (
        <div className="container-fluid justify-content-center">
            {props.children}
        </div>
    )
}


export default Container;