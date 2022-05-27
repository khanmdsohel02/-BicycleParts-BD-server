import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../firebaseConfig';


const OrderModal = ({ modalData }) => {
  const { name, quantity, price } = modalData;
  const [user] = useAuthState(auth);

  const handleOrder = event => {
    event.preventDefault();
    const partName = event.target.partname.value;
    const orderedQuantity = event.target.orderedquantity.value;
    const userName = user?.displayName;
    const userEmail = user?.email;
    const userPhone = event.target.userphone.value;
    const whereSend = event.target.wheresend.value;
    const orderCost = parseInt(price) * parseInt(orderedQuantity)

    const orderDetails = {partName, orderedQuantity,orderCost, userName, userEmail, userPhone, whereSend }
    console.log(orderDetails)
       
 fetch('http://localhost:5000/order', {
  method: 'POST',
  headers: {
      'content-type':'application/json'
  },
  body: JSON.stringify(orderDetails)
})
  .then(res => res.json())
  .then(result => {
      console.log(result);
      const data = result;
      if (data) {
        toast.success(`Order Successfully Place, Order Cost:$ ${orderCost}`, { id: "success" });
        event.target.reset()
        
        
              }})
}


    return (
        <div>
<div className='flex justify-center mt-6'><label htmlFor="order" disabled={quantity === 0}  className="btn w-48 bg-indigo-400 hover:bg-indigo-500 ">Place Order</label></div>
<input type="checkbox" id="order" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <label htmlFor="order" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg text-center">{name}</h3>
    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-4 justify-items-center mt-4'>
    <input type="text" name='partname' value={name} disabled className="input input-bordered w-full max-w-xs" />
    <input type="number" name='orderedquantity' placeholder="Order more than 500 unit" required className="input input-bordered w-full max-w-xs" />
    <input type="text" name='username' required value={user?.displayName} disabled className="input input-bordered w-full max-w-xs" />
    <input type="email" name='useremail'required value={user?.email} disabled className="input input-bordered w-full max-w-xs" />
    <input type="number" name='userphone' required placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
    <input type="text" name='wheresend' required placeholder="Address where to send" className="input input-bordered w-full max-w-xs" />
    <input htmlFor="my-modal"  type="submit" value='Submit order' className="btn w-full max-w-xs" />
    </form>
  </div>
</div>
</div>
    );
};

export default OrderModal;