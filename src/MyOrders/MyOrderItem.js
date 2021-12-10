import React, { useEffect, useState } from "react";
import {  useHistory } from 'react-router-dom';

import '../PriceNav/CallsAndService/CallsAndService.css';
import Spinner from "../Spinner/Spinner";
import { changeMyOrderStatus } from '../API/restAPI';

export const MyOrderItem = ({order, onOrderClicked}) => {

    const history = useHistory();

    const [showLoader, setShowLoader] = useState(false);

    useEffect(()=>{

        console.log(order);

    }, []);

    const timeFormatFromTS = (ts) => {
        let date = new Date(ts);
        let hours = date.getHours() < 10 ? '0'+date.getHours() : date.getHours()
        let minutes = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes();
        return hours+':'+minutes;
    }

    const orderClicked = () => {
        console.log('orderClicked');

        // history.push({
        //     pathname: `/orderDetails/${order.restaurantID}/${order._id}`,
        //     order: order
        //   })
    }

    const onAcceptOrderClicked = async () => {
        
        if (order.delivery === 'Delivery' && order.status === 'delivery' ||
            order.delivery === 'Take-away' && order.status === 'take away') {
            console.log('onAcceptOrderClicked');

            setShowLoader(true);
            const params = {
                restaurantID: order.restaurantID, 
                callID: order._id,
                newStatus: 'approved'
            }

            const response = await changeMyOrderStatus(params);
            console.log(response);
            

            if (response.status === 200) {
                order.status = 'approved';
                setShowLoader(false);
            } else if (response.status === 401) {
                history.push(`/login`);
            } else if (response.status === 100) {
                const response = await changeMyOrderStatus(params);
                console.log(response);
                order.status = 'approved';
                setShowLoader(false);
            } else {
                console.log('Unknown error');
                setShowLoader(false);
            }
            
        }
    }


    return(
        <div
            style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between',  border: '1px solid #2196f3', borderRadius: '12px', margin: '2px 8px', padding: '0 12px'}}>
            {
                showLoader 
                ? <div style={{width: '100%', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Spinner />
                    <p style={{fontSize: '14px', color: '#707070', padding: '0px 8px'}}>Changing status ...</p>
                </div>  
                : 
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <div
                            style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '70px'}}>
                        
                            <img  className={order.delivery === 'Restaurant' ? `service RestaurantService` : order.delivery === 'Delivery' ? `service DeliveryService` : `service Take-awayService` } alt="" />
                            <p style={{color: '#707070', fontSize: '14px'}}>{order.delivery}</p>
                        </div> 
                        <p style={{color: '#707070', fontSize: '16px', marginLeft: '12px'}}>{order.table}</p>
                    </div>

                    <div
                        onClick={() => {onAcceptOrderClicked()}}
                        style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '70px'}}>
                    
                        {
                            (order.delivery === 'Delivery' && order.status === 'delivery') || (order.delivery === 'Take-away' && order.status === 'take away')
                            ?
                            <img  className={`service DeliveryCheckedImg`} alt="" />
                            :
                            ''
                        }
                        <p style={{color: '#707070', fontSize: '16px'}}>{timeFormatFromTS(order.time)}</p>
                    </div>
                   

                </div>
            }
            
        </div>
    );
}