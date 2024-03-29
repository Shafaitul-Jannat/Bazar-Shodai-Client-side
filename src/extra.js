import axios from "axios";
import { getAuth, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import app from "../../firebase.init";


const auth = getAuth(app);

const MyItem = () => {
    const [user] = useAuthState(auth);

    let [items, setItems] = useState([]);
    useEffect(() => {
        const getItems = async () => {
            try {
                const { data } = await axios.get(`https://shrouded-dusk-35482.herokuapp.com/myitems?email=${user?.email}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    },
                });
                setItems(data);
            } catch (error) {
                if (error.response.status === 403) {
                    toast.error("Access denied.You are logged out");
                    signOut(auth);
                }
            }
        };
        getItems();
    }, []);
    const handleDelete = (_id) => {
        const confirmation = window.confirm("Are you sure, you want to delete this items?");
        const deleteItem = async () => {
            try {
                const { data } = await axios.delete(`https://shrouded-dusk-35482.herokuapp.com/item/${_id}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    },
                });
            } catch (error) {
                if (error.response.status === 403) {
                    toast.error("Access denied. You are logged out");
                    signOut(auth);
                }
            }
        };
        if (confirmation) {
            deleteItem();
            const newItems = items.filter((items) => items._id !== _id);
            setItems(newItems);
            toast("items Deleted");
        }
    };
    return (
        <div className="container py-16">
            <div className="lg:flex lg:justify-between items-center">
                <h1 className="text-4xl py-3">My Items</h1>{" "}
                <Link className="inline-block py-2 px-6 border" to="/add-item">
                    Add Item
                </Link>
            </div>
            <table border="1" width="100%" className="mt-5">
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
                        <tr key={item._id} className="space-y-3">
                            <th>{item.name}</th>
                            <td>{item.price} Tk</td>
                            <td>{item.quantity === 0 ? <p className="text-rose-500">Sold Out</p> : item.quantity}</td>
                            <td>{item.supplier}</td>
                            <td>
                                <Link className="inline-block py-2 px-6 border" to={`/inventory/${item._id}`}>
                                    Update Item
                                </Link>
                                <button
                                    onClick={() => {
                                        handleDelete(item._id);
                                    }}
                                    className="inline-block py-2 px-6 border"
                                >
                                    Delete Item
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyItem;