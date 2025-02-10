import React from 'react';
import { useParams } from "react-router-dom";

function ItemPage() {
    const { id } = useParams();

    return (
        <h1>Item {id} page</h1>
    )
}

export default ItemPage;