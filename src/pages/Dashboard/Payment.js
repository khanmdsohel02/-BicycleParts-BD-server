import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../../components/CheckoutForm';

const stripePromise = loadStripe('pk_test_51L46qKBzx2wycmglQBi8tzk22X22AlRkYnqIK7ngkkvyyFyg1OJZjGGaNp8LFuoEMA6Lw1QLLs521iWh5NDdInyN00lv2Hcksh');

const Payment = () => {
    const { id } = useParams()
    const [order, setOrder] = useState([]);
    console.log(order)

    useEffect(() => {
        fetch(`http://localhost:5000/order/${id}`)
            .then(res => res.json())
            .then(data => {
              setOrder(data)
              
            })
    }, [id])


    return (
        <div>
           
  <div class="card w-50 max-w-md  bg-base-100 shadow-xl my-12">
  <div class="card-body">
      <p className='text-'>Hellow, {order?.user}</p>
    <h2 class="card-title">Pay For {order?.partname}</h2>
    <p>Provide Accurate Information For Payment</p>
    <p>Please Pay: <span>${order?.ordercost}</span></p>
    <p>We Deliver The Product's Within Seven Working Days After Payment</p>
  </div>
</div>
    <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
      <div class="card-body">
        
      <Elements stripe={stripePromise}>
    <CheckoutForm order={order} />
  </Elements>
       
      </div>
    </div>
  </div>

    );
};

export default Payment;