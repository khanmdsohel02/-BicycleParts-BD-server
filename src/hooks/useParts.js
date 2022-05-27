import { useEffect, useState } from "react";

const useParts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('https://ancient-beyond-42134.herokuapp.com/part')
        .then(res =>res.json())
       .then(data => setParts(data))
    },[])



    return [parts, setParts]

    
};

export default useParts;