import React, { useEffect, useState } from "react";
import OrderService from "../services/OrderService";

export const OrderItem = ({item, onRemoveItem}) => {

    useEffect(()=>{

    }, []);


    const onRemoveItemFromOrder = () => {
        console.log('onRemoveItemFromOrder');
        if (OrderService.instance.removeItem(item.key)){
            onRemoveItem();
        }
    }

    return(
        <div style={{display: 'flex' , alignItems: 'center', justifyContent: 'center' ,height: '90px', width: '50vw', border: '1px solid black'}}>
            <div style={{width: '120px' ,height: '90px', background: `url(${item.url}) no-repeat center `}}>

            </div>
            <div style={{display: 'flex', height: '90px', width: '100%' , alignItems: 'center', justifyContent: 'space-between'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center' }}>
                    <p style={{padding: '0 10px'}}>{item.name}</p>
                    <p style={{padding: '0 10px'}}>{item.price} &#8362;</p>
                </div>
                <div
                    onClick={()=>{onRemoveItemFromOrder()}}
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'center',  marginRight: '12px', padding: '5px'}}>
                    <i className="trash icon" style={{color: 'red'}}></i>
                </div>
            </div>
        </div>
    );
}
