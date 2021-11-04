import React, { useEffect, useState } from "react";
import { PriceNav } from "../PriceNav/PriceNav";
import OrderService from "../services/OrderService";
import { InvoiceItem } from "./InvoiceItem";
import '../App.css'

export const Invoice = () => {

    const [items, setItems] = useState();

    useEffect(()=>{
        console.log(OrderService.instance.getOrder());
        let items = Object.keys(OrderService.instance.getOrder().items).map((item)=>{
            return <InvoiceItem key={item} itemKey={item} item={OrderService.instance.getOrder().items[item]} />
        })

        setItems(items)

    }, []);


    return(
        <div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '86vh'}}>
                <div className="invoice-div" >
                    {items}
                </div>
            </div>
            <div style={{position: 'sticky', bottom: '0px'}}>
                <PriceNav />
            </div>
        </div>
    );
}