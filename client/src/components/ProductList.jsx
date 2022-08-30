import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const ProductList = (props) => {
    //delete product
    const { deleteProductDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/delete/' + productId)
            .then(res =>
            {   console.log(res.data)
                deleteProductDom(productId)
            })
            .catch((err) => console.error(err));
    }
    return ( 
        <div className="row ">
            <h1 className="display-4">All Products</h1>
            <div className="mt-4">

            {props.products.map(
                (product, i) => (<div key={i} className="d-flex flex-wrap justify-content-sm-center border" >
                    <div className="w-25 m-2">
                    <Link to={`/${product._id}`}>
                        <h4 className="m-1">
                        {product.title} 
                        </h4>
                    </Link>
                  </div>
                    <div className="d-flex justify-content-evenly m-2 w-25">
                           
                    <button className="btn btn-danger m-1" onClick={(e) => { deleteProduct(product._id) }}> Delete </button>
                    
                     <Link to={`/${product._id}/edit`}>
                        <h4 className="btn btn-info m-1">
                        Edit
                        </h4>
                    </Link>
                    </div>
               
                    </div>
                   )
                )
                }
                
            </div>
        </div>
     );
}
 
export default ProductList;