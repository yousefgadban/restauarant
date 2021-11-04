import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { OrderItem } from "./OrderItem";


export const Orders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        getOrdersData();
    }, []);

    const onReloadClicked = () => {
        console.log('onReloadClicked');
        getOrdersData();
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
        <div>
            <input 
                type='button' 
                value='reload' 
                onClick={()=>onReloadClicked()}
                style={{backgroundColor: '#2196f3', border: '1px solid #2196f3', borderRadius: '7px', padding: '10px 15px', margin: '12px', color: 'white' }} />
                <br />
                <div style={{display: 'grid', gridTemplateColumns: 'auto'}}>
                    {
                        orders
                    }
                </div>
        </div>
    );
}