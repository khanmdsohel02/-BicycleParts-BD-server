import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import UserUpdataModal from '../../components/UserUpdataModal';
import auth from '../../firebaseConfig';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const {phoneNumber, displayName, email, photoUR } = user;
    return (
        <><div className='mt-24'>
        <div class="card w-96 bg-base-100 shadow-xl">
        <label htmlFor="my-modal-6" className="absolute bg-indigo-300 px-4 py-2 rounded-bl-2xl rounded-tr-2xl right-3 top-3 cursor-pointer">Edit</label>
<figure class="px-10 pt-10">
 <img src={photoUR || 'https://i.ibb.co/XCkK8mp/logoo.png'} alt="Shoes" class="rounded-xl" />
</figure>
<div class="card-body items-center text-center">
 <h2 class="card-title">{displayName}</h2>
 <h2 class="text-lg">{email}</h2>
 <h2 class="text-lg">{phoneNumber}</h2>
 <p class="text-lg">Welcome To Our Website, Thanks For With Us</p>
</div>
</div>
</div>
<UserUpdataModal/> 
        </>
    );
};

export default MyProfile;