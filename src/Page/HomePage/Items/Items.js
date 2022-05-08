import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div id='items' className='container'>
            < div className='text-success text-center p-5' >
                <h1>Inventory</h1>
            </div >
            <div className='row'>

                {
                    items.map(item =>
                        <Item
                            key={item.id}
                            item={item}>
                        </Item>)}
            </div>
            <button>Delivered</button>
        </div >
    );
};

export default Items;