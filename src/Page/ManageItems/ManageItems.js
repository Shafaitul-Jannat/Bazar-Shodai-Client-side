import React from 'react';
import { Table } from 'react-bootstrap';
import useItems from '../Hooks/useItems';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ManageItems = () => {
    const [items, setItems] = useItems();

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure, you want to delete this item?");
        if (proceed) {
            const url = `https://shrouded-dusk-35482.herokuapp.com/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                    toast("Item Deleted");
                })


        }
    }
    return (
        <div>
            <h2 className='m-3'>Inventory</h2>
            <Link className=" bg-success  text-white  text-decoration-none py-2 px-3 mt-3 border" to="/additem">
                Add Item
            </Link>
            {/* {
                items.map(item =>
                    <div
                        key={item._id}>
                        <h4>{item.name}</h4>
                    </div >
                )} */}
            <Table responsive bordered hover className='mt-5'>
                <thead>
                    <tr>
                        <th>Name </th>
                        <th>Price </th>
                        <th>Quantity </th>
                        <th>Seller </th>
                        <th>Action </th>
                    </tr>
                </thead>
                <tbody>
                    {items?.map((item) => (
                        <tr key={item._id} className="">
                            <th>{item.name}</th>
                            <td>{item.price} Tk</td>
                            <td>{item.quantity === 0 ? <p className="text-danger">Sold Out</p> : item.quantity}</td>
                            <td>{item.seller}</td>
                            <td>
                                <div className='d-flex px-3'>
                                    <button>
                                        <Link className="text-decoration-none text-black py-2 px-3 hover" to={`/ inventory/:${item._id}`} >
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