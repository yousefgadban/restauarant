import React, { useEffect } from "react";
import OrderService from "../services/OrderService";

export const OrderItem = ({itemKey, item, onRemoveItem, onItemClicked}) => {

    useEffect(()=>{

    }, []);


    const onRemoveItemFromOrder = (e) => {
        e.stopPropagation();
        console.log('onRemoveItemFromOrder', item.id);
        if (OrderService.instance.removeItem(itemKey)){
            onRemoveItem();
        }
    }

    const onOrderItemClicked = () => {
        console.log('onOrderItemClicked ');
        onItemClicked(item);
    }

    return(
        <div 
            onClick={()=>{onOrderItemClicked()}}
            style={{display: 'flex' , alignItems: 'center', justifyContent: 'center' ,height: '90px', width: '100%', border: '1px solid #c8c8c8'}}>
            <div style={{width: '120px' ,height: '90px', background: `url(${item.url}) no-repeat center `}}>

            </div>
            <div style={{display: 'flex', height: '90px', width: '100%' , alignItems: 'center', justifyContent: 'space-between'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center' }}>
                    <p style={{padding: '0 10px'}}>{item.name}</p>
                    <p style={{padding: '0 10px'}}>{item.price} &#8362;</p>
                </div>
                <div
                    onClick={(e)=>{onRemoveItemFromOrder(e)}}
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'center',  marginRight: '12px', padding: '5px'}}>
                    <i className="trash icon" style={{color: 'red'}}></i>
                </div>
            </div>
        </div>
    );
}
