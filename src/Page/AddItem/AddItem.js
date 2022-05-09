import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };


    return (
        <div className='w-50 mx-auto mt-3'>
            <h2>Please add a Item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className="border py-1 px-3 mb-2 w-full" placeholder='Item Name' {...register("name", { required: true, maxLength: 20 })} />

                <input className="border py-1 px-3 mb-2 w-full" placeholder='Item Price' type="number" {...register("price")} />

                <input className="border py-1 px-3 mb-2 w-full" placeholder='Item Quantity' type="number" {...register("quantity")} />

                <input className="border py-1 px-3 mb-2 w-full" placeholder='Supplier Name' {...register("name", { required: true, maxLength: 20 })} />

                <textarea className="border py-1 px-3 mb-2 w-full" placeholder='Item Description' {...register("description")} />

                <input className="border py-1 px-3 mb-2 w-full" placeholder='Photo URL' type="text" {...register("img")} />

                <div>
                    <input className="fs-5 mt-2 border px-3 py-1 bg-success text-white fw-bolder cursor-pointer" type="submit" value="Add item" />
                </div>
            </form >
        </div >
    );
};

export default AddService;