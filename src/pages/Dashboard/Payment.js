import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const { id } = useParams()
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/order/${id}`)
            .then(res => res.json())
            .then(data => {
              setOrder(data)
              
            })
    }, [])


    return (
        <div>
            <h1>please pay for : {order.partName}</h1>
            <h1>Payment</h1>
            <h1>Payment</h1>
            <h1>Payment</h1>
        </div>
    );
};

export default Payment;