import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams , useNavigate} from "react-router-dom";

const Update = (props) => {
      const [product, setProduct] = useState({
        title: "",
        price: "",
        description: ""
    });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                //set the fetch products
                console.log(res);
                setProduct(res.data.product);
            })
            .catch(err => console.error(err));
    }, []);

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/update/' + id, product )
            .then(res => console.log(res))
            .catch(err => console.error(err));
        navigate("/");
    }
    //onChange to update title , price, and description
     function handleChange(event) {
          setProduct({
              ...product,
              [event.target.name]: event.target.value
          });
         
      }
        return (
            <div className="container ">
                <h1 className="display-4 text-center text-primary m-4">Product Manager</h1>
                <form onSubmit={updateProduct} >
                    <div className="form-group row m-2">
                        <label className="col-sm-2 col-form-label text-primary h1"> Title:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name='title' onChange={handleChange}  value={product.title} />
                        </div>
                    </div>

                    <div className="form-group row m-2">
                        <label className="col-sm-2 col-form-label text-primary h1"> Price:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name='price'  onChange={handleChange} value={product.price} />
                        </div>
                    </div>

                    <div className="form-group row m-2">
                        <label className="col-sm-2 col-form-label text-primary h1" > Description:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name='description' onChange={handleChange}  value={product.description} />
                        </div>
                    </div>
                    <button className="btn btn-primary m-2" >Update</button>
                </form>

            </div>
        );
    }

export default Update;