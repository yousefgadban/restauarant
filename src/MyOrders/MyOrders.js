import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { getMyOrders } from '../API/restAPI'
import Spinner from '../Spinner/Spinner';
import {  useHistory, useParams  } from 'react-router-dom';
import { MyOrderItem } from "./MyOrderItem";



export const MyOrders = () => {

    const history = useHistory();

    const [showLoader, setShowLoader] = useState(true);
    const [orders, setOrders] = useState([]);
    const ordersRef = useRef([]);
    


    useEffect(async()=>{

        const response = await getMyOrders();
        console.log(response);

        if (response.status === 200) {
            setOrders(response.data.data);
            ordersRef.current = response.data.data
            setShowLoader(false);

        } else if (response.status === 401) {
            history.push(`/login`);
        } else if (response.status === 100) {
            const response = await getMyOrders();
            setOrders(response.data.data);
            ordersRef.current = response.data.data
            setShowLoader(false);

        } else {
            console.log('Unknown error');
        }

    }, []);




    const onOrderClicked = (order) => {
        console.log('onOrderClicked');
    }


    return(
        showLoader 
        ? <div style={{width: '100%', height: '92vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Spinner />
        </div>  
        : 
        <div>
            
            <div style={{display: 'grid', gridTemplateColumns: 'auto'}}>
                {
                    ordersRef.current.map((order)=>{
                        return <MyOrderItem key={order._id} order={order} onOrderClicked={onOrderClicked} />
                    })
                }
            </div>
        </div>
    );
}