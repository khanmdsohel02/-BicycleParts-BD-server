import React from 'react';

const OrderDeleteModal = ({ order, handleDelete }) => {
    return (
        <div>
<input type="checkbox" id="my-delete-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg uppercase">are you sure! Do you want to delete this part?</h3>
    <div class="modal-action">
    < label onClick={() =>handleDelete(order._id)} for="my-delete-modal" class="btn btn-sm bg-red-600">Yes</label>
    <label for="my-delete-modal" class="btn btn-sm bg-indigo-400">Cancel</label>
    </div>
  </div>
</div> 
        </div>
    );
};

export default OrderDeleteModal;