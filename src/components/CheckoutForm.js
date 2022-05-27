import React, {  useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [payError, setPayError] = useState('')
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');
    const { ordercost:price, username, useremail } = order;
    useEffect(() => {
        
        fetch('https://ancient-beyond-42134.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type':'application'
            },
            body:JSON.stringify({price})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.clientSecret) {
                    setClientSecret(data?.clientSecret)
                }
                
        })

   },[price])

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
        setProcessing(true)
        
        const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                    name: username,
                    email:useremail
                },
              },
            },
        );
      
        if (intentError) {
            setPayError(intentError?.message)
        } else {
            setPayError('')
            toast.success(" Your Payment Successfull", { id: "success" });
            console.log(paymentIntent)
         }
        





    };
    
        
       

        
    
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
 </>
    );
};

export default CheckoutForm;