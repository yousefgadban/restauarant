import React, { useEffect } from "react";
import { useState } from "react";
import OrderService from "../services/OrderService";
import { InvoiceItemAddition } from "./InvoiceItemAddition";

export const InvoiceItem = ({item, itemKey}) => { 

    const [additions, setAdditions] = useState([]);

    useEffect(()=>{

        let itemAdd = [];

        if (OrderService.instance.getOrder().items[itemKey] !== undefined && OrderService.instance.getOrder().items[itemKey].additions.length !== 0) {
            
            OrderService.instance.getOrder().items[itemKey].additions.forEach((addition)=>{

                let additionItems = [];
                addition.additionItems.forEach((additionItem)=>{
                    if (additionItem.isDefault) {
                        additionItems.push(<InvoiceItemAddition key={additionItem._id} itemAddition={additionItem} />);
                    }
                })
    
                itemAdd.push(additionItems);
  

                
            })


            // OrderService.instance.getOrder().items[itemKey].additions.forEach((addition)=>{

            //     let additionItems = [];
            //      Object.values(OrderService.instance.getOrder().items[itemKey].additions[addition.key].additionItems).forEach((additionItem)=>{
            //         if (additionItem.default) {
            //             additionItems.push(<InvoiceItemAddition key={additionItem.key} itemAddition={additionItem} />);
            //         }
            //     })
    
            //     itemAdd.push(additionItems);
  

                
            // })
    
            setAdditions(itemAdd)
        }

    }, [itemKey]);


    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' , width: '100%'}}>
            <div style={{display: 'flex', flexDirection: 'column', width: '100%' , alignItems: 'center'}}>
                <div style={{display: 'flex', width: '100%' , alignItems: 'center', justifyContent: 'space-between'}}>
                    <div style={{padding: '4px 10px', color: '#333',}}>{item.name}</div>
                    <div style={{padding: '4px 10px', color: '#333'}}>{item.price} &#8362;</div>
                </div>
                
                <div style={{display: 'flex', flexDirection: 'column', width: '100%' , alignItems: 'center'}}>
                    {
                        additions
                    }
                </div>
                <div style={{backgroundColor: '#c8c8c8', height: '1px', width: '90%', margin: '5px 0'}}></div>
                <div style={{display: 'none'}}>{itemKey}</div>
            </div>
        </div>
    );
}
