import React, { useEffect } from "react";
import axios from "axios";
import { useState, useRef } from "react";
import { OrderItem } from "./OrderItem";
import { getRestaurantOrders } from '../../API/restAPI'
import Spinner from '../../Spinner/Spinner';
import {  useHistory, useParams  } from 'react-router-dom';

import socketIOClient from "socket.io-client";
import { OptionModal } from "../OptionModal/OptionModal";
const ENDPOINT = "http://127.0.0.1:4000";

export const Orders = () => {

    const history = useHistory();

    const { restId, restName } = useParams();

    const [showLoader, setShowLoader] = useState(true);
    const [renderTemp, setRenderTemp] = useState(true);
    const [orders, setOrders] = useState([]);
    const ordersRef = useRef([]);
    const [currentOption, setCurrentOption] = useState('new');
    const [showOptionsModal, setShowOptionsModal] = useState(false);
    const currentOrder = useRef(null);

    const options = ['new', 'progress', 'done', 'take away', 'delivery', 'delete'];

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

        socketListenToNewOrders();

    }, []);


    const socketListenToNewOrders = () => {
        
        const socket = socketIOClient(ENDPOINT);
        socket.on("connect", () => {
            console.log(`You connected with id: ${socket.id}`);
            socket.emit('joinRestaurantOrders', {restId})

            socket.on(`${restId}-orders`, (order)=> {
                console.log('new order', order);
                console.log('orders', orders, ordersRef.current);

                const newOrder = ordersRef.current.find((o)=> {
                    return order._id === o._id;
                })

                console.log(newOrder);

                if (!newOrder) {
                    ordersRef.current.push(order);

                    console.log('ordersRef.current', ordersRef.current);
                    
                    setRenderTemp(true);
                    setTimeout(() => {
                        setOrders(ordersRef.current);
                        setRenderTemp(false);
                    }, 1000);
                } else {
                    newOrder.status = order.status;
                    
                    console.log('ordersRef.current changed', ordersRef.current);

                    setRenderTemp(true);
                    setTimeout(() => {
                        setOrders(ordersRef.current);
                        setRenderTemp(false);
                    }, 1000);
                }

            })
        });
    }

    const onOptionClicked = (option) => {
        console.log('onOptionClicked', option);
        if (option !== currentOption) {
            setCurrentOption(option)
        }
    }

    const onOrderClicked = (order) => {
        console.log('onOrderClicked par', order.table);
        currentOrder.current = order
        setShowOptionsModal(true)
    }

    const changeOptionsModalDisplay = () => {
        console.log('changeOptionsModalDisplay');
        setShowOptionsModal(false)
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
            <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto', margin: '2px 2px'}}>
                {
                    options.map((option)=>{
                        return <div className={currentOption === option ? "option selected" : "option"}  style={{ color: option === 'delete' ? 'red' : currentOption === option ? 'white' : '#2196f3'}}  key={option} onClick={()=>{onOptionClicked(option)}} >{option}</div>
                    })
                }
            </div>
            <hr />
            <div style={{display: 'grid', gridTemplateColumns: 'auto'}}>
                {
                    // ordersRef.current.map((order)=>{
                    //     return <OrderItem key={order._id} order={order} onOrderClicked={onOrderClicked} />
                    // })

                    ordersRef.current.filter((order)=>{
                        return order.status === currentOption;
                    }).map((order)=>{
                        return <OrderItem key={order._id} order={order} onOrderClicked={onOrderClicked} />
                    })
                }
            </div>

            <div style={{display: showOptionsModal ? 'block' : 'none'}}>
                {
                    showOptionsModal ? 
                    <OptionModal options={options} changeOptionsModalDisplay={changeOptionsModalDisplay} currentCall={currentOrder.current}  kind="orders"/>
                    : ''
                }
            </div>
        </div>
    );
}