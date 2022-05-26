import React from 'react';
import ManagePart from '../../components/ManagePart';
import useParts from '../../hooks/useParts';


const ManageProducts = () => {
 const [parts] = useParts()

    return (
        
           
        <>
 <h1 className='mt-4 text-xl'>MANAGE PRODUCTS</h1>
<div class="overflow-x-auto w-fit mt-4">
<table class="table w-full">
  <thead>
    <tr>
      <th>IMAGE</th>
      <th>NAME</th>
      <th>QUANTITY</th>
      <th>PRICE</th>
      <th>DELETE/EDIT</th>
    </tr>
  </thead>
  <tbody>
 { parts.map(part =>
    <ManagePart
      key={part._id}
      part ={part}
      />
      )  }
  </tbody>
</table>
</div>
</>         

    );
};

export default ManageProducts;