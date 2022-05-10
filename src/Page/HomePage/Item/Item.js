import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = (props) => {
    const item = props.item;
    const navigate = useNavigate();

    const navigateToServiceDetail = _id => {
        navigate(`/inventory/${_id}`);
    }

    const displayContent = (text) => {
        return text.length < 200 ? text : text.slice(0, 200);
    };
    return (


        < div className='g-3 col-sm-12 col-md-6 col-lg-4  ' >

            <div className="card" style={{ width: "20rem" }}>
                <img className=" card-img-top" src={item?.img} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item?.name}</h5>
                    <h6>Price: {item?.price} </h6>
                    <h6>Quantity: {item?.quantity} </h6>
                    <h6>Seller: {item?.seller} </h6>
                    <p className=" text-start card-text"><small>{displayContent(item?.description)}<span className='text-muted fw-bold'>... read more</span></small></p>
                    <div>
                        <button onClick={() => navigateToServiceDetail(item?._id)} className='btn btn-success'>Update</button>
                    </div >
                </div >
            </div >

        </div >

    );
};

export default Item;