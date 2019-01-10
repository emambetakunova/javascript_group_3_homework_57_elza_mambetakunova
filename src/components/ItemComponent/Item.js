import React from "react";
import "./Item.css";


const Item = props => {
    return (
        <div className="Item">
            <input type="text" value={props.itemName} onChange={props.changeHandlerName} />
            <input className="ItemCost" type="number" onFocus={props.onFocus} value={props.itemCost} onChange={props.changeHandlerCost} />
            <button className="addBtn" onClick={props.onClick}>Add</button>
        </div>
    )
};

export default Item;