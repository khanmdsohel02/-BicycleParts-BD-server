import ManagePart from '../../components/ManagePart';
import useParts from '../../hooks/useParts';


const ManageProducts = () => {
    const [parts, setParts] = useParts()

  const handleDelete = id => {
      console.log(id)
          const url = `http://localhost:5000/part/${id}`;
          fetch(url, {
              method:'DELETE'
          })
              .then(res => res.json())
              .then(data => {
                  console.log(data);
                  const remaining = parts.filter(part => part._id !== id);
                  setParts(remaining)
          })}
 
    return (
<>
 <h1 className='mt-4 text-xl font-semibold text-indigo-700'>MANAGE PRODUCTS</h1>
<div className="overflow-x-auto lg:w-3/5 sm:[98%] mt-4">
<table className="table w-full">
  <thead>
    <tr>
      <th>IMAGE</th>
      <th>NAME</th>
      <th>QUANTITY</th>
      <th>PRICE</th>
      <th>DELETE</th>
    </tr>
  </thead>
  <tbody>
 { parts.map((part,index) =>
   <ManagePart
     index={index}
      key={part._id}
      part ={part}
      handleDelete={handleDelete}
      />,
      )  }
  </tbody>
</table>
</div>
</>         

    );
};

export default ManageProducts;