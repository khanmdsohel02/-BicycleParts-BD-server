import React from 'react';

const OrderModal = ({part}) => {
    return (
        <div>
<div className='flex justify-center mt-6'><label for="order" class="btn w-48 bg-indigo-400 hover:bg-indigo-500 ">Place Order</label></div>
<input type="checkbox" id="order" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">{part.name}</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <label for="order" class="btn">Yay!</label>
    </div>
  </div>
</div>
</div>
    );
};

export default OrderModal;