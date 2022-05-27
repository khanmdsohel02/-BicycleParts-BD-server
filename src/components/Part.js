import React from 'react';
import { useNavigate } from 'react-router-dom';


const Part = ({ part }) => {
    const {_id, name, image, about, quantity, price } = part;
    const navigate = useNavigate()

    const navigateToDetailsPage = id => {
        navigate(`/part-details/${id}`);
}
    return (
        <div class="card lg:w-96 bg-base-100 shadow-xl z-0">
        <figure class="px-10 pt-10">
          <img src={image} alt="img" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title text-2xl">{name}</h2>
          <h2 class="card-title">Available Quantity :<span className='text-lg'>{quantity}</span></h2>
          <h2 class="card-title">Price :<span className='text-lg'>${price} ( per unit )</span></h2>
          <p className='text-lg'>{about.slice(0, 200)}</p>
          <div>
            <button onClick={() => navigateToDetailsPage(_id)} class="btn bg-indigo-400">Purchase</button>
          </div>
        </div>
      </div>
    );
};

export default Part;