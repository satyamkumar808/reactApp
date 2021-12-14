import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import authHeader from '../Services/auth-header';

const Orders = () => {

    const[orders, setOrders] = useState([])
    let navigate = useNavigate();

    const fetch = async () => {
        const API_URL = "http://localhost:50973/api/Order/";
        const header = authHeader();
    
    
        const config = {
            headers: header
        }

        let response = await axios.get(API_URL+"allOrders", config)
        .catch((err)=> console.log(err))

        setOrders(response.data)
    }

    useEffect(()=>{
        if(!localStorage.getItem("user")){
            navigate("/login")
        }
        fetch();
    })

    return (
        <div className="container">
            {orders.map((order, index)=>{
                return(
                    <div className="row" id="orderRow" key={index}>
                        <div className="col">
                        <b>Total : </b>    
                        {order.total}
                        </div>
                        <div className="col">
                        <b>Address : </b>    
                        {order.address}
                        </div>
                        <div className="col">
                        {order.estDelivery} <b> Days</b>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Orders
