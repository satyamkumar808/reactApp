import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import authHeader from '../Services/auth-header';
import axios from 'axios';
import { setProducts } from '../Actions/productsActions';

export const Home = () => {

    let navigate = useNavigate();
    const products = useSelector((state) => state.allProducts.products)
    const API_URL = "http://localhost:50973/api/Products/";
    const header = authHeader();
    const dispatch = useDispatch()


    const config = {
        headers: header
    }

    const fetch = async () => {
        const response = await axios.get(API_URL+"allProducts", config)
        .catch((err)=> console.log(err))

        dispatch(setProducts(response.data));
    }

    useEffect(()=> {
        if(!localStorage.getItem("user")){
            navigate("/login")
        }
        fetch();
    })
    
    console.log("Products: ", products);

    return (
        <div className="container">
            <ul>
                {products.map((product, index)=>{
                    return(
                        <div key={index}>
                            <div className = "row">
                                <div className="col">
                                {product.modelNum}
                                </div>
                                <div className="col">
                                {product.description}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}
