import React from "react";

function Column(props) {
    return(
        <div className="col-sm-6">
            {props.children}
        </div>
    )
}


export default Column;