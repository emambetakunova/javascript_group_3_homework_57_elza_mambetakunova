import React from "react";
import "./List.css";

const List = props => {
    return (
        <div className="List">
            <p>{props.text}</p>
            <span><strong>{props.price} KGS</strong></span>
            <button className="removeBtn" onClick={props.remove}></button>
        </div>
    )
};

export default List;