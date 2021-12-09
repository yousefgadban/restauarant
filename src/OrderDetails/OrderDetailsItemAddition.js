import React, { useEffect } from "react";

export const OrderDetailsItemAddition = ({itemAddition}) => {

    useEffect(()=>{

    }, []);

    return(
        <div style={{display: 'flex', width: '100%' , alignItems: 'center', justifyContent: 'space-between'}}>
            <div style={{padding: '2px 18px', color: '#707070', fontSize: '14px'}}>{itemAddition.name}</div>
            <div style={{display: 'flex' , alignItems: 'center', padding: '2px 10px'}}>
                <div style={{padding: '0px 4px', color: '#707070', fontSize: '14px'}}>{itemAddition.price !== 0 ? itemAddition.price : ''}  </div>
                <span style={{display: itemAddition.price !== 0 ? 'block' : 'none', color: '#707070', fontSize: '14px'}}>&#8362;</span>
            </div>
        </div>
    );
}
