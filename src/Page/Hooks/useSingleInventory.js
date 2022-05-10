

import { useEffect, useState } from "react";

const useSingleInventory = inventoryId => {
    const [items, setItems] = useState({});

    useEffect(() => {
        const url = `https://shrouded-dusk-35482.herokuapp.com/item/${inventoryId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data));

    }, [inventoryId]);
    return [items]
}



export default useSingleInventory;