import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebaseConfig';

const AddProduct = () => {
    const [user] = useAuthState(auth);
   
    const handleAddProduct = event => {
        event.preventDefault()

        const email = user.email
        const name = event.target.name.value
        const price = event.target.price.value
        const quantity = event.target.quantity.value
        const image = event.target.image.value
        const about = event.target.about.value
        
        const newPart = {email, name, price, quantity, image, about}
       console.log(newPart)
    
 fetch('http://localhost:5000/part', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newPart)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                const data = result;
                if (data) {
                    toast.success("Successfully Added ", { id: "success" });
                    event.target.reset()
                        }})};
    
       
  

    return (
      <>
        <h1 className='mt-10 text-xl font-semibold'>ADD PRODUCT</h1>
     <div className='h-screen flex justify-center items-center -mt-28'>
       <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleAddProduct} class="card-body">
        <div class="form-control">
          <input  
           name='email'
           disabled
           value={user?.email}
           class="input input-bordered" />
             
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Parts Name</span>
          </label>
          <input 
           type="text"
           name='name'
           placeholder="Parts Name" 
           class="input input-bordered" />
             
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Part Quantity</span>
          </label>
          <input 
           name='quantity'
           type="number"
           placeholder="Part Quantity" 
           class="input input-bordered" />
             
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Price(per unit)</span>
          </label>
          <input  
           name='price'
           type="number"
           placeholder="Price" 
           class="input input-bordered" />
             
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">ABOUT</span>
          </label>
          <textarea
           type="taxt"
           name='about'
           placeholder="About Part" 
           class="textarea textarea-bordered" /> 
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Put Image URL</span>
          </label>
          <input
           name='image'
           type="text"
           class="input input-bordered" /> 
        </div>
        <div class="form-control">
        <input className='btn mt-3  w-80 bg-indigo-400 hover:bg-indigo-200 hover:text-black' type="submit" value='ADD PART' />
        </div>
      </form>
    </div>
</div> 
        </>
    );
};

export default AddProduct;