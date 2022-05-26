import React from 'react';
import toast from 'react-hot-toast';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebaseConfig';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const username = user?.displayName
   const image = user?.photoURL
    
    const handleAddReview = event => {
        event.preventDefault()

        
        // const name = user?.displayName
        // const image = user?.photoURL
        const about = event.target.about.value
        
        const newPart = {username, image, about}
       console.log(newPart)
    
 fetch('http://localhost:5000/review', {
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
        <h1 className='mt-10 text-xl font-semibold'>ADD REVIEW</h1>
     <div className='h-screen flex justify-center items-center -mt-60'>
       <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleAddReview} class="card-body">
        <div class="form-control">
          <input  
           name='img'
           disabled
           value={username}
           class="input input-bordered" />
             
        </div>
        <div class="form-control">
          <input 
           name='name'
           disabled
           value={image}          
           class="input input-bordered" />
             
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">FeedBack</span>
          </label>
          <textarea
           type="taxt"
           name='about'
           placeholder="Say Somthing" 
           class="textarea textarea-bordered" />
        </div>
        <div class="form-control">
        <input className='btn mt-3  w-80 bg-indigo-400 hover:bg-indigo-200 hover:text-black' type="submit" value='Add review' />
        </div>
      </form>
    </div>
</div> 
        </>
    );
};

export default AddReview;