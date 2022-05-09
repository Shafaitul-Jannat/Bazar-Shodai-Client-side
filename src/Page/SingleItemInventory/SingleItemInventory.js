import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import useSingleInventory from "../Hooks/useSingleInventory";
import { toast } from "react-toastify";

const SingleItemInventory = () => {

    const { inventoryId } = useParams();
    const [item, setItem] = useSingleInventory(inventoryId);
    const [item_Quantity, setItem_Quantity] = useState();
    useEffect(() => {
        const getItem = async () => {
            const { data } = await axios.get(`http://localhost:5000/item/${inventoryId}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });

            setItem(data);
            setItem_Quantity(data.quantity);
        };
        getItem();
    }, []);

    let itemName = item?.name;
    let itemPrice = item?.price;
    let itemQuantity = item?.quantity;
    let itemDescription = item?.description;
    let itemSupplier = item?.supplier;


    const updateItem = (item) => {
        const setItem = async () => {
            const { data } = await axios.post(`http://localhost:5000/additem`, item, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });

            if (data.success) {
                toast.success("item Updated");
            } else {
                toast.error("Failed to update item");
            }
        };
        setItem();
    };
    const quantityUpdate = (updatedQuantity) => {
        const { quantity, ...rest } = item;
        const newItem = { quantity: updatedQuantity, ...rest };
        setItem(newItem);
    };
    const stockRef = useRef();

    const handleSubmitStock = (event) => {
        event.preventDefault();
        const totalQuantity = parseInt(itemQuantity) + parseInt(event.target.stock.value);
        const formItem = {
            name:
                item?.name, price: itemPrice, quantity: totalQuantity, description: itemDescription
        };
        quantityUpdate(totalQuantity);
        updateItem(formItem);
    };
    const handleReduceStock = () => {
        const totalQuantity = parseInt(itemQuantity) - 1;
        const formItem = { name: itemName, price: itemPrice, quantity: totalQuantity, description: itemDescription };
        quantityUpdate(totalQuantity);
        updateItem(formItem);
    };

    return (
        <div className="mt-5 pt-5">
            <div class="row justify-content-around">
                <div class="col-4">
                    <img className='img-fluid' src={item?.img} alt="" srcset="" />
                </div>
                <div class="col-4">
                    <h4 className="text-start">ID: {item?._id}</h4>
                    <h1 className="text-start">{item?.name}</h1>
                    <div>
                        <h4 className="text-start">Quantity:{item?.quantity}</h4>
                        <h4 className="text-start">Price: {item?.price}</h4>
                        <h4 className="text-start">Supplier: {item?.supplier}</h4>
                    </div>
                    <div className="text-start">
                        {item?.description}
                    </div>
                    <br />
                    {itemQuantity <= 0 ? (
                        ""
                    ) : (
                        <button onClick={handleReduceStock} className=" btn btn-primary  py-2 px-6 border">
                            Delivered
                        </button>
                    )}
                </div>
            </div>


            <div>

                < div className="container pb-5 mt-5" >
                    <div className="border p-8 mx-auto  mt-12 mb-5">
                        <h1 className="text-3xl font-medium text-center mb-3">Restock Item</h1>
                        <form onSubmit={handleSubmitStock} className="space-y-4">
                            <input className="border py-1 px-3 w-full" ref={stockRef} name="stock" type="number" placeholder="Add Stock Quantity" required />
                            <br />
                            <input className="border px-7 py-2 bg-[#dfa761] hover:bg-[#c68f4b] cursor-pointer" type="submit" value="Add to stock" />
                        </form>
                    </div>
                </div >
            </div >
        </div>
    );
};

export default SingleItemInventory;