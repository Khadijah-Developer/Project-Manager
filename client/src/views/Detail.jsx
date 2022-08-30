import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
 
    const navigate = useNavigate();
       const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/delete/' + productId)
            .then(res =>
            {   console.log(res.data)

                navigate("/");
            })
            .catch((err) => console.error(err));
    }
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                //set the fetch products
                console.log(res);
                setProduct(res.data.product);
            })
            .catch(err => console.error(err));
    },[]);
    return ( 
        <div className="container mt-5">
            <h1>{product.title}</h1>
            <h3>Price $: {product.price}</h3> 
            <h3>Description: {product.description}</h3>

            <button className="btn btn-danger m-1" onClick={(e) => {deleteProduct(product._id)}}> Delete </button>

        </div>
     );
}
 
export default Detail;