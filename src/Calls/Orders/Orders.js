import React, { useEffect } from "react";
import axios from "axios";
import { useState, useRef } from "react";
import { OrderItem } from "./OrderItem";
import { getRestaurantOrders } from '../../API/restAPI'
import Spinner from '../../Spinner/Spinner';
import {  useHistory, useParams  } from 'react-router-dom';

import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4000";

export const Orders = () => {

    const history = useHistory();

    const { restId, restName } = useParams();

    const [showLoader, setShowLoader] = useState(true);
    const [renderTemp, setRenderTemp] = useState(true);
    const [orders, setOrders] = useState([]);
    const ordersRef = useRef([])

    useEffect(async()=>{
        const response = await getRestaurantOrders(restId);
        console.log(response);

        if (response.status === 200) {
            setOrders(response.data.data);
            ordersRef.current = response.data.data
            setShowLoader(false);

        } else if (response.status === 401) {
            history.push(`/login`);
        } else if (response.status === 100) {
            const response = await getRestaurantOrders(restId);
            setOrders(response.data.data);
            ordersRef.current = response.data.data
            setShowLoader(false);

        } else {
            console.log('Unknown error');
        }
    }, []);

    const onReloadClicked = () => {
        console.log('onReloadClicked');
        //getOrdersData();
    }

    const getOrdersData = async () => {
        let restaurantID = '1';
        let response = await axios.get(`https://6177eef89c328300175f5c4a.mockapi.io/api/v1/restaurants/${restaurantID}/orders`, {});
        console.log(response);

        let orders = response.data.map((order)=>{
            console.log(order.order);
            return <OrderItem key={order.id} order={order}/>
        })
        setOrders(orders) 
    }

    return(
        showLoader 
        ? <div style={{width: '100%', height: '92vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Spinner />
        </div>  
        : 
        <div>
            <input 
                type='button' 
                value='reload' 
                onClick={()=>onReloadClicked()}
                style={{backgroundColor: '#2196f3', border: '1px solid #2196f3', borderRadius: '7px', padding: '10px 15px', margin: '12px', color: 'white' }} />
                <br />
                <div style={{display: 'grid', gridTemplateColumns: 'auto'}}>
                    {
                        ordersRef.current.map((order)=>{
                            return <OrderItem key={order._id} order={order}/>
                        })
                    }
                </div>
        </div>
    );
}