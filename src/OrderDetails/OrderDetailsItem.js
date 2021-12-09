import React, { useEffect } from "react";
import { useState } from "react";
import { OrderDetailsItemAddition } from "./OrderDetailsItemAddition";

export const OrderDetailsItem = ({order, item, itemKey}) => { 

    const [additions, setAdditions] = useState([]);

    useEffect(()=>{

        let itemAdd = [];

        if (item && item.additions.length !== 0) {
            
            item.additions.forEach((addition)=>{

                let additionItems = [];
                addition.additionItems.forEach((additionItem)=>{
                    if (addition.singleChoice && additionItem.isDefault) {
                        additionItems.push(<OrderDetailsItemAddition key={additionItem._id} itemAddition={additionItem} />);
                    } else if (!addition.singleChoice) {
                        additionItems.push(<OrderDetailsItemAddition key={additionItem._id} itemAddition={additionItem} />);
                    }
                })
    
                itemAdd.push(additionItems);
  

                
            })
    
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
