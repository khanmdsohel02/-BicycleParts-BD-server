import React from 'react';

const PartDeleteModal = ({ part, handleDelete }) => {
    return (
        <div>
        <input type="checkbox" id="part-delete" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="font-bold text-lg uppercase">are you sure! Do you want to delete this part?</h3>
            <div class="modal-action">
            < label for="part-delete" onClick={() =>handleDelete(part._id)} class="btn btn-sm bg-red-600">Yes</label>
            <label for="part-delete" class="btn btn-sm bg-indigo-400">Cancel</label>
            </div>
          </div>
        </div> 
    </div>
    );
};

export default PartDeleteModal;

// onClick={() =>handleDelete(order._id)}