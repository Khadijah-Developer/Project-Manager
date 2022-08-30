import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';


const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    // useEffect to fetch products data from the backend
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/')
            .then(res => {
                //set the fetch products
                console.log(res);
                setProducts(res.data.products);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);
    // delete a product
    const deleteProductDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    //to refreshthe list of products
    function handleNewCreateProduct(newProduct) { 
        console.log("New Product", newProduct);
        setProducts([...products, newProduct]);
    }
    return ( 
        <div className="container">
            <ProductForm handleNewCreateProduct={ handleNewCreateProduct} />
            <hr />
            {loaded && <ProductList products={products} deleteProductDom={ deleteProductDom} />}
            
        </div>
     );
}
 
export default Main;