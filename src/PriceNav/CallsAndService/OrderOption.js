import React, { useEffect, useState } from "react";
import './CallsAndService.css'
import axios from 'axios';
import OrderService from "../../services/OrderService";
import { useHistory } from 'react-router-dom';
import Spinner from "../../Spinner/Spinner";
import { addNewCall, addNewOrder } from '../../API/restAPI';
import RestaurantService from "../../services/RestaurantService";

export const OrderOption = ({service, onOrderOptionClicked}) => {

    const history = useHistory();
    const [status, setStatus] = useState('normal');
    

    useEffect(()=>{

    }, []);

    const onOrderOptionClickedd =  (e) => {
        console.log('onOrderOptionClicked', service);
        //onOrderOptionClicked(service);

        setStatus('sending')
        setTimeout(() => {
            sendOrder();
        }, 1200);
        

    }

    const sendOrder = async () => {
        let restaurantID = RestaurantService.instance.getRestaurantID();
        let restaurantName = RestaurantService.instance.getName();
        let table = Math.floor(Math.random()*5+1);
        
        console.log(typeof OrderService.instance.getOrder().items, OrderService.instance.getOrder().items.length);
        console.log(Object.keys(OrderService.instance.getOrder()).length);

        let params = {
            service: `order`,
            table: `Table ${table}`,
            name: `yousef`,
            restaurantID: restaurantID,
            restaurantName: restaurantName,
            order: OrderService.instance.getOrder(),
            price: OrderService.instance.getPrice(),
            delivery: `${service}`,
        }


        // let response = await axios.post(`https://6177eef89c328300175f5c4a.mockapi.io/api/v1/restaurants/${restaurantID}/orders`, params);
        let response = await addNewOrder(params);
        console.log(response); 

        setStatus('done');
        setTimeout(() => {
            setStatus('normal');
            onOrderOptionClicked('orderCommited');
        }, 1200);

        OrderService.instance.setEmptyOrder();
        history.push(`/restaurant/${restaurantID}/name`);

    }

 
    return(
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #2196f3', height: '70px', margin: '2px', borderRadius: '10px'}}>
            <div 
                onClick={(e)=>{onOrderOptionClickedd()}}
                style={{display: status === 'normal' ? 'flex' : 'none', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <img  className={`service ${service}Service`} alt="" />
                <p style={{color: '#707070', fontSize: '14px'}}>{service}</p>
            </div>
            <div style={{display: status === 'sending' ? 'flex' : 'none', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Spinner />
            </div>
            <div style={{display: status === 'done' ? 'flex' : 'none', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <img  className={`service DoneService`} alt="" />
                <p style={{color: '#707070', fontSize: '14px'}}>Done</p>
            </div>
        </div>
    );
}

