import React, {useState, useEffect} from 'react'

function Product() {

  const[data, setData]= useState([]);
  const[filter, setFilter]= useState(data);
  const[loading, setLoading]= useState(false);

  let componentMounted = true;

  useEffect(() => {
   
      getProducts();
  }, []);

  return (
    <div>Product</div>
  )
}

export default Product