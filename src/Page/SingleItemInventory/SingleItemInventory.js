import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import useSingleInventory from '../Hooks/useSingleInventory';


const SingleItemInventory = () => {

    const { inventoryId } = useParams();
    const [item, setItem] = useSingleInventory(inventoryId);


    const [item_Quantity, setItem_Quantity] = useState();
    useEffect(() => {
        const getItem = async () => {
            const { data } = await axios.get(`https://shrouded-dusk-35482.herokuapp.com/item/${inventoryId}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });


            setItem(data);
            setItem_Quantity(data.quantity);
        };
        getItem();
    }, []);



    // 
    const updateItem = (product) => {
        const setItem = async () => {
            const { data } = await axios.post(`https://hasan-inventory.herokuapp.com/additem`, product, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });

            if (data.success) {
                toast.success("Item Updated");
            } else {
                toast.error("Failed to update Item");
            }
        };
        setItem();
    };

    const quantityUpdate = (updatedQuantity) => {
        const { quantity, ...rest } = item;
        const newItem = { quantity: updatedQuantity, ...rest };
        setItem(newItem);
    };
    const Ref = useRef();

    const handleSubmitStock = (event) => {
        event.preventDefault();
        const totalQuantity = parseInt(item?.quantity) + parseInt(event.target.stock.value);
        const makeItem = {
            name:
                item?.name, price: item?.price, quantity: totalQuantity, description: item?.description
        };
        quantityUpdate(totalQuantity);
        updateItem(makeItem);
    };
    const handleReduceStock = () => {
        const totalQuantity = parseInt(item?.quantity) - 1;
        const makeItem = { name: item?.name, price: item?.price, quantity: totalQuantity, description: item?.description };
        quantityUpdate(totalQuantity);
        updateItem(makeItem);
        console.log(totalQuantity);
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
                        <h4 className="text-start">Seller: {item?.seller}</h4>
                    </div>
                    <div className="text-start">
                        {item?.description}
                    </div>
                    <br />
                    {item?.quantity <= 0 ? (
                        ""
                    ) : (
                        <button onClick={handleReduceStock} className="  bg-success  text-white fw-bold border px-3 py-3 mt-3 cursor-pointer">
                            Delivered
                        </button>
                    )}
                </div>
            </div>


            <div>

                < div className="container  mt-5 w-50 mb-5" >
                    <div className="border p-8 mx-auto  mt-12 mb-5">
                        <h1 className=" font-medium text-center mb-3 mt-3">Restock Item</h1>
                        <make onSubmit={handleSubmitStock} className="p-3">
                            <input className="border  w-100 py-3 p-3 " ref={Ref} name="stock" type="number" placeholder="Add Stock Quantity" required />
                            <br />
                            <input className="bg-success  text-white fw-bold border px-3 py-3 mt-3 cursor-pointer" type="submit" value="Add to stock" />
                        </make>
                    </div>
                </div >
            </div >
        </div>
    );
};

export default SingleItemInventory;