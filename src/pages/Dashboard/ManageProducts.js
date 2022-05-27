import ManagePart from '../../components/ManagePart';
import useParts from '../../hooks/useParts';


const ManageProducts = () => {
    const [parts, setParts] = useParts()
    const handleDelete = id => {
        const proceed = window.confirm('Are you Sure?');
        if (proceed) {
            const url = `http://localhost:5000/part/${id}`;
            fetch(url, {
                method:'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = parts.filter(part => part._id !== id);
                    setParts(remaining)
                   
            })
        }
    }
 
    return (
<>
 <h1 className='mt-4 text-xl font-semibold text-indigo-700'>MANAGE PRODUCTS</h1>
<div class="overflow-x-auto w-3/5 mt-4">
<table class="table w-full">
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
 { parts.map(part =>
    <ManagePart
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