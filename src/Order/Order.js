import React, { useEffect, useState } from "react";
import OrderService from "../services/OrderService";
import { OrderItem } from "./OrderItem";

export const Order = () => {

    const [items, setItems] = useState();

    useEffect(()=>{

        let items = OrderService.instance.getOrder().items.map((item)=>{
            return <OrderItem key={item.id} onRemoveItem={onRemoveItem} item={item} />
        })

        setItems(items)

    }, []);

    const onRemoveItem = () => {
        console.log('onRemoveItem par');
        let items = OrderService.instance.getOrder().items.map((item)=>{
            return <OrderItem key={item.id} onRemoveItem={onRemoveItem} item={item} />
        })

        setItems(items)
    }

    return(
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{display: 'flex', width: '50vw', height: '80vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'start'}}>
                {items}
            </div>
        </div>
    );
}