import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
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
    console.log(partName, orderedQuantity, userName, userEmail, userPhone, whereSend)
    event.target.reset()
}


    return (
        <div>
<div className='flex justify-center mt-6'><label for="order" disabled={quantity === 0}  class="btn w-48 bg-indigo-400 hover:bg-indigo-500 ">Place Order</label></div>
<input type="checkbox" id="order" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <label for="order" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="font-bold text-lg text-center">{name}</h3>
    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-4 justify-items-center mt-4'>
    <input type="text" name='partname' value={name} disabled class="input input-bordered w-full max-w-xs" />
    <input type="number" name='orderedquantity' placeholder="Order more than 500 unit" class="input input-bordered w-full max-w-xs" />
    <input type="text" name='username'  value={user?.displayName} disabled class="input input-bordered w-full max-w-xs" />
    <input type="email" name='useremail' value={user?.email} disabled class="input input-bordered w-full max-w-xs" />
    <input type="number" name='userphone' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
    <input type="text" name='wheresend' placeholder="Address where to send" class="input input-bordered w-full max-w-xs" />
    <input for="my-modal" type="submit" value='Submit order' class="btn w-full max-w-xs" />
    </form>
  </div>
</div>
</div>
    );
};

export default OrderModal;