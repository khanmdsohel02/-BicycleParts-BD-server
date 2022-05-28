import { updateProfile } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebaseConfig';

const UserUpdataModal = () => {
    const [user] = useAuthState(auth);
    

    const handleUudateUser = async event => {
        event.preventDefault();
        const name =  event.target.username.value
        const phone =  event.target.phone.value
        const url =  event.target.url.value
        await updateProfile({ displayName: name, phoneNumber:phone, photoURL:url});
    }
    return (
       
<div>
<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <form onSubmit={handleUudateUser} className='grid grid-cols-1 gap-4 justify-items-center mt-4'>
    <input type="text" value={user?.email} disabled  className="input input-bordered w-full max-w-xs" />
    <input type="text" name='username'  placeholder={user?.displayName}  className="input input-bordered w-full max-w-xs" />
    <input type="number" name='phone'  placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
    <input type="text" name='url'  placeholder="Upload Your Photo URL" className="input input-bordered w-full max-w-xs" />
    <input htmlFor="my-modal-6"  type="submit" value='Submit order' className="btn w-full max-w-xs" />
    </form>
    
  </div>
</div>
</div>

    );
};

export default UserUpdataModal;