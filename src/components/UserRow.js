import React from 'react';
import toast from 'react-hot-toast';


const UserRow = ({ user }) => {
    const { email, userName, role } = user;
    const admin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res =>res.json())
            .then(data => {
            console.log(data)
            toast.success('Successfully Make An Admin')
            ()
        })
    }
    return (
        <tr>
        <th>{}</th>
        <td>{email}</td>
        <td>{userName}</td>
        <td>{(role === 'admin')? <p className='text-xs'>Already Admin</p> :<button onClick={admin} class="btn btn-sm mr-2 ">Admin</button>}</td>
      </tr>
    );
};

export default UserRow;