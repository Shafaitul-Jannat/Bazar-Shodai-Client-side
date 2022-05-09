import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './items.css'

const Items = () => {
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    const item = items.slice(0, 6);
    return (
        <div id='items' className='container'>
            < div className='text-success text-center p-5' >
                <h1>Inventory</h1>
            </div >
            <div className='row'>

                {
                    item.map(item =>
                        <Item
                            key={item._id}
                            item={item}>
                        </Item>)}
            </div>
        </div >
    );
};

export default Items;