import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = (props) => {
    const item = props.item;
    const navigate = useNavigate();

    const navigateToServiceDetail = _id => {
        navigate(`/inventory/${_id}`);
    }


    return (


        < div className='g-5 col-sm-12 col-md-6 col-lg-4 mt-2' >

            <div className="card" style={{ width: "20rem" }}>
                <img className=" card-img-top" src={item?.img} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item?.name}</h5>
                    <h6>Price: {item?.price} </h6>
                    <h6>Quantity: {item?.quantity} </h6>
                    <p className="card-text"><small>{item?.description}</small></p>
                    <div>
                        <button onClick={() => navigateToServiceDetail(item?._id)} className='btn btn-success'>Update</button>
                    </div >
                </div >
            </div >

        </div >

    );
};

export default Item;