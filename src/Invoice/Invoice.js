import React, { useEffect, useState } from "react";
import OrderService from "../services/OrderService";
import { InvoiceItem } from "./InvoiceItem";

export const Invoice = () => {

    const [items, setItems] = useState();

    useEffect(()=>{

        let items = OrderService.instance.getOrder().items.map((item)=>{
            return <InvoiceItem key={item.id} item={item} />
        })

        setItems(items)

    }, []);


    return(
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{display: 'flex', width: '50vw', height: '80vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'start'}}>
                {items}
            </div>
        </div>
    );
}