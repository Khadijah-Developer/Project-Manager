import React, { useState } from 'react'
import axios from 'axios';

const ProductForm = (props) => {
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: ""
    });


    const onSubmitHandler = (e) => { 
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/products/new', product)
            .then(res => {
                console.log(res)
                //get product info and pass it to the main component
                props.handleNewCreateProduct(res.data.product);
              }
            )
            .catch(err => console.log(err))
        //to empty input fields after the product has been created
        setProduct({
            title: "",
            price: "",
            description: ""
        })

    }

        //onChange to update title , price, and description
      function handleChange(event) {
          setProduct({
              ...product,
              [event.target.name]: event.target.value
          });
      }

    return ( 
        <div className="container mt-5 text-center">

                <h1 className="display-4 text-center text-primary m-4">Product Manager</h1>
            <form onSubmit={onSubmitHandler} >
                <div className="form-group row m-2">
                    <label className="col-sm-2 col-form-label text-primary h1"> Title:</label>
                    <div className="col-sm-10">     
                    <input type="text" className="form-control" name='title' onChange={handleChange} value={product.title} />
                     </div>
                </div>

                <div className="form-group row m-2">
                    <label className="col-sm-2 col-form-label text-primary h1"> Price:</label>
                      <div className="col-sm-10">  
                    <input type="text" className="form-control" name='price' onChange={handleChange} value={product.price} />
                   </div>
                </div>

                <div className="form-group row m-2">
                    <label className="col-sm-2 col-form-label text-primary h1" > Description:</label>
                      <div className="col-sm-10">  
                        <input type="text" className="form-control" name='description' onChange={handleChange} value={product.description} />
                    </div>
                </div>
                <button className="btn btn-primary m-2" >Create</button>
            </form>

        </div>
     );
}
 
export default ProductForm;