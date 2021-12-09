import React, { useEffect } from "react";
import {  useHistory } from 'react-router-dom';
import '../../PriceNav/CallsAndService/CallsAndService.css';

export const OrderItem = ({order, onOrderClicked}) => {

    const history = useHistory();

    useEffect(()=>{

    }, []);

    const timeFormatFromTS = (ts) => {
        let date = new Date(ts);
        let hours = date.getHours() < 10 ? '0'+date.getHours() : date.getHours()
        let minutes = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes();
        return hours+':'+minutes;
    }

    const orderClicked = () => {
        console.log('orderClicked');
        //history.push(`/orderDetails/${order.restaurantID}/${order._id}`);

        history.push({
            pathname: `/orderDetails/${order.restaurantID}/${order._id}`,
            order: order
          })
    }

    const changeOrderStatusClicked = (e) => {
        e.stopPropagation();
        console.log('changeOrderStatusClicked');
        onOrderClicked(order);
    }


    return(
        <div
            onClick={() => {orderClicked()}}
            style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between',  border: '1px solid #2196f3', borderRadius: '12px', margin: '2px 8px', padding: '0 0 0 12px'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div
                    style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '70px'}}>
                
                    <img  className={order.delivery === 'Restaurant' ? `service RestaurantService` : order.delivery === 'Delivery' ? `service DeliveryService` : `service Take-awayService` } alt="" />
                    <p style={{color: '#707070', fontSize: '14px'}}>{order.delivery}</p>
                </div>
                <p style={{color: '#707070', fontSize: '16px', marginLeft: '12px'}}>{order.table}</p>
            </div>
            
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div>
                    <p style={{color: '#707070', fontSize: '16px', margin: '0 8px'}}>{timeFormatFromTS(order.time)}</p>
                </div>
                <div
                    onClick={(e) => {changeOrderStatusClicked(e)}} 
                    style={{borderLeft: '1px solid #2196f3', padding: '8px',  height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img  className={`orderStatus`} alt="" />
                </div>
            </div>
            
        </div>
    );
}