import React, {  useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [payError, setPayError] = useState('')
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('')
    const {_id:id, ordercost, client, email } = order;
    
    useEffect(() => {
        
      if (ordercost) {
        fetch('http://localhost:5000/create-payment-intent', {
          method: 'POST',
          headers: {'content-type':'application/json'},
          body:JSON.stringify({ordercost})
      })
          .then(res => res.json())
          .then(data => {
              console.log(data)
              if (data?.clientSecret) {
                  setClientSecret(data?.clientSecret)
              }
              
      })
       }

   },[ordercost])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
           return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setPayError(error?.message || "")
      
        
        const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                    name: client,
                    email:email
                },
              },
            },
        );
      
        if (intentError) {
          setPayError(intentError?.message)
        } else {
            setPayError('')
          toast.success("Congrats! Your Payment Successfull", { id: "success" });
          setTransactionId(paymentIntent.id)

          const payment ={
            order: id,
            transactionId:paymentIntent.id
          }


          fetch(`http://localhost:5000/order/${id}`, {
            method: 'PATCH',
            headers: {'content-type':'application/json'},
            body:JSON.stringify(payment)
          })
            .then(res => res.json())
            .then(data => {
              console.log(data)
          })
           
         }};
    
    return (
        <>
            <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn bg-indigo-400 btn-sm mt-5' type="submit" disabled={!stripe || !clientSecret}>
        Payment
      </button>
    </form>
    {payError && <p className=' text-red-600 font-semibold'>{payError}</p>}
    {transactionId && <p className=' text-red-600 font-bold'>Trans. ID:{transactionId}</p>}
 </>
    );
};

export default CheckoutForm;