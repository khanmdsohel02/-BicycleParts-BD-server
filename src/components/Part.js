import React from 'react';

const Part = ({ part }) => {
    const { name, image, about, quantity, price } = part;
    return (
        <div class="card w-96 bg-base-100 shadow-xl z-0">
        <figure class="px-10 pt-10">
          <img src={image} alt="img" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title text-2xl">{name}</h2>
          <h2 class="card-title">Available Quantity :<span className='text-lg'>{quantity}</span></h2>
          <h2 class="card-title">Price :<span className='text-lg'>${price} ( per unit )</span></h2>
          <p className='text-lg'>{about.slice(0, 200)}</p>
          <div>
            <button class="btn bg-indigo-400">Purchase</button>
          </div>
        </div>
      </div>
    );
};

export default Part;