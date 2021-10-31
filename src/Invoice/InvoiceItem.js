import React, { useEffect } from "react";

export const InvoiceItem = ({item}) => {

    useEffect(()=>{

    }, []);

    return(
        <div style={{display: 'flex' , alignItems: 'center', justifyContent: 'center' , width: '50vw', border: '1px solid black'}}>
            <div style={{display: 'flex', width: '100%' , alignItems: 'center', justifyContent: 'space-between'}}>
                <div style={{padding: '4px 10px'}}>{item.name}</div>
                <div style={{padding: '4px 10px'}}>{item.price} &#8362;</div>
            </div>
        </div>
    );
}
