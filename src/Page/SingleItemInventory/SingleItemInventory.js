import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const SingleItemInventory = () => {
    const [item, setItem] = useState({ name: "", price: "", quantity: "", description: "", supplier: "", image: "" })
    const { _id } = useParams();

    const [item_quantity, setItem_quantity] = useState();
    return (
        <div>
            <h2>hello boss</h2>
        </div>
    );
};

export default SingleItemInventory;