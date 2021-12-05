import React, { useEffect, useState } from "react";
import './CallsAndService.css'
import axios from 'axios';
import OrderService from "../../services/OrderService";
import { useHistory } from 'react-router-dom';
import Spinner from "../../Spinner/Spinner";
import { addNewCall, addNewOrder } from '../../API/restAPI';
import RestaurantService from "../../services/RestaurantService";

export const Service = ({service, onServiceClicked}) => {

    const history = useHistory();
    const [status, setStatus] = useState('normal');

    useEffect(()=>{

    }, []);

    const onServiceClickedd =  (e) => {
        console.log('onServiceClicked', service);
        //onServiceClicked(e, service);

        if (service !== 'Notes') {
            setStatus('sending')
            setTimeout(() => {
                if (service !== 'Order') {
                    sendCall();
                } else {
                    sendOrder();
                }
            }, 1200);
        }

    }

    const sendOrder = async () => {
        let restaurantID = RestaurantService.instance.getRestaurantID();
        let table = Math.floor(Math.random()*5+1);
        
        console.log(typeof OrderService.instance.getOrder().items, OrderService.instance.getOrder().items.length);
        console.log(Object.keys(OrderService.instance.getOrder()).length);

        let params = {
            service: `order`,
            table: `Table ${table}`,
            name: `yousef`,
            restaurantID: restaurantID,
            order: OrderService.instance.getOrder(),
            price: OrderService.instance.getPrice()
        }


        // let response = await axios.post(`https://6177eef89c328300175f5c4a.mockapi.io/api/v1/restaurants/${restaurantID}/orders`, params);
        let response = await addNewOrder(params);
        console.log(response); 

        setStatus('done');
        setTimeout(() => {
            setStatus('normal');
        }, 1200);

        OrderService.instance.setEmptyOrder();
        history.push(`/restaurant/${restaurantID}/name`);

    }

    const sendCall = async () => {
        let restaurantID = RestaurantService.instance.getRestaurantID();
        let table = Math.floor(Math.random()*5+1);
        
        let params = {
            service: `${service}`,
            table: `Table ${table}`,
            name: `yousef`,
            restaurantID: restaurantID  
        }

        // let response = await axios.post(`https://6177eef89c328300175f5c4a.mockapi.io/api/v1/restaurants/${restaurantID}/calls`, params);
        let response = await addNewCall(params);

        console.log(response);

        setStatus('done');
        setTimeout(() => {
            setStatus('normal');
        }, 1000);
       
    }

    const getTimeStr = () => {
        let now = new Date();
        let hours = now.getHours();
        let hoursStr = hours < 10 ? '0'+hours : ''+hours;
        let minutes = now.getMinutes();
        let minutesStr = minutes < 10 ? '0'+minutes : ''+minutes;

        return hoursStr+':'+minutesStr;
    }
 
    return(
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #2196f3', height: '70px', margin: '2px', borderRadius: '10px'}}>
            <div 
                onClick={(e)=>{onServiceClickedd()}}
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


// src='../../images.location.png'