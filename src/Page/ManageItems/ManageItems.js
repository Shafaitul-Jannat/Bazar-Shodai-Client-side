import React from 'react';
import { Table } from 'react-bootstrap';
import useItems from '../Hooks/useItems';
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [items, setItems] = useItems();

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure, you want to delete this item?");
        if (proceed) {
            const url = `https://thawing-mountain-91486.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                })


        }
    }
    return (
        <div>
            <h2>Hello Boss</h2>
            {/* {
                items.map(item =>
                    <div
                        key={item._id}>
                        <h4>{item.name}</h4>
                    </div >
                )} */}
            <Table responsive bordered hover>
                <thead>
                    <tr>
                        <th>Name </th>
                        <th>Price </th>
                        <th>Quantity </th>
                        <th>Supplier </th>
                        <th>Action </th>
                    </tr>
                </thead>
                <tbody>
                    {items?.map((item) => (
                        <tr key={item._id} className="">
                            <th>{item.name}</th>
                            <td>{item.price} Tk</td>
                            <td>{item.quantity === 0 ? <p className="text-danger">Sold Out</p> : item.quantity}</td>
                            <td>{item.supplier}</td>
                            <td>
                                <div className='d-flex px-3'>
                                    <button>
                                        <Link className="text-decoration-none text-black py-2 px-3 hover" to={`/ inventory / ${item._id}`}>
                                            Update Item
                                        </Link></button>
                                    <br />

                                    <button
                                        onClick={() => {
                                            handleDelete(item._id);
                                        }}
                                        className=" py-2 px-3 mx-3 border hover "
                                    >
                                        Delete Item
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))
                    }

                </tbody >
            </Table >
        </div >
    );
};

export default ManageItems;