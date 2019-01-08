import React from "react";
import "./Item.css";

const Item = props => {
    return (
        <div className="Item">
            <input type="text" value={props.item} />
            <input type="text" value={props.cost} />
            <div onClick={props.onClick} />
    </div>
)
};

export default Item;