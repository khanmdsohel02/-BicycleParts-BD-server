import React from 'react';
import { useNavigate } from 'react-router-dom';


const Part = ({ part }) => {
    const {_id, name, image, about, quantity, price } = part;
    const navigate = useNavigate()

    const navigateToDetailsPage = id => {
        navigate(`/part-details/${id}`);
}
    return (
        <div className="card lg:w-96 bg-base-100 shadow-xl z-0">
        <figure className="px-10 pt-10">
          <img src={image} alt="img" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl">{name}</h2>
          <h2 className="card-title">Available Quantity :<span className='text-lg'>{quantity}</span></h2>
          <h2 className="card-title">Price :<span className='text-lg'>${price} ( per unit )</span></h2>
          <p className='text-lg'>{about?.slice(0, 200)}</p>
          <div>
            <button onClick={() => navigateToDetailsPage(_id)} className="btn bg-indigo-400">Purchase</button>
          </div>
        </div>
      </div>
    );
};

export default Part;