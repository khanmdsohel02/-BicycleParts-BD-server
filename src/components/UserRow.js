
import React from 'react';
import toast from 'react-hot-toast';


const UserRow = ({ user }) => {
    const { email, client, role } = user;
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
        <td>{email}</td>
        <td>{client}</td>
        <td>{(role === 'admin')? <p className='text-xs'>Already Admin</p> :<button onClick={admin} className="btn btn-sm mr-2 ">Admin</button>}</td>
      </tr>
    );
};

export default UserRow;