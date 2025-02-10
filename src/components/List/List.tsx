import React from 'react';
import "./List.css";
import ListItem from "../ListItem/ListItem";

function List() {
    return (
        <ul className="list">
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
        </ul>
    )
}

export default List;