import React, { useEffect, useState } from "react";
import {  useParams, useLocation } from 'react-router-dom';
import { InvoiceItem } from "../Invoice/InvoiceItem";
import { OrderDetailsItem } from "./OrderDetailsItem";

export const OrderDetails = () => {

    const { restId, orderId } = useParams();
    const { order } = useLocation();

    const [items, setItems] = useState();

    useEffect(()=>{

        console.log(restId, orderId, order);

        if (order.order.items) {
            let items = order.order.items.map((item)=>{
                return <OrderDetailsItem key={item.id} itemKey={item._id} item={item} order={order.order} />
            });

            setItems(items)
        }

    }, []);

    return(
        <div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '86vh'}}>
                
                <div style={{display: 'flex', width: '100%' , alignItems: 'center', justifyContent: 'space-between', margin: '10px 0'}}>
                    <div style={{padding: '4px 10px', color: '#333', fontSize: '16px'}}>Total Price:</div>
                    <div style={{padding: '4px 10px', color: '#333', fontSize: '16px'}}>{order.price} &#8362;</div>
                </div>

                <div style={{width: '100vw', height: '1px', backgroundColor: '#c8c8c8'}}>
                    
                </div>

                <div className="invoice-div" >
                    {items}
                </div> 
                
            </div>
        </div>
    );
}