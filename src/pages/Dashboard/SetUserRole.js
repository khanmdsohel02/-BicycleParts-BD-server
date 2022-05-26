import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserRow from '../../components/UserRow';
import auth from '../../firebaseConfig';
import { signOut } from 'firebase/auth';


const SetUserRole = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState([]);
 useEffect(() => {
   fetch('http://localhost:5000/users', {
     method: 'GET',
     headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
     }
   })
     .then(res => {
       console.log(res)
       if (res.status === 401 || res.status === 403){
          navigate('/')
         signOut(auth);
         localStorage.removeItem('accessToken');
          
         }
        return res.json()})
      .then(data => setUsers(data))
   },[])
    
    return (
        <div className='mt-24'>
            <h1>Use's</h1>
            <div class="overflow-x-auto w-fit h-screen">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>SL .</th>
        <th>EMAIL</th>
        <th>nAME</th>
        <th>SET ROLE</th>
      </tr>
    </thead>
    <tbody>
     {users.map(user =>
     <UserRow
     key={user._id}
     user ={user}
     />
     )}
    </tbody>
  </table>
</div>
           

            
        </div>
    );
};

export default SetUserRole;