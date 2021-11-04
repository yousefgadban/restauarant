import React, { useEffect } from "react";
import '../../PriceNav/CallsAndService/CallsAndService.css';

export const OrderItem = ({order}) => {

    useEffect(()=>{

    }, []);

    return(
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between',  border: '1px solid #2196f3', borderRadius: '12px', margin: '2px', padding: '0 12px'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div
                    style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '70px'}}>
                
                    <img  className={`service OrderService`} alt="" />
                    <p style={{color: '#707070', fontSize: '14px'}}>order</p>
                </div>
                <p style={{color: '#707070', fontSize: '16px', marginLeft: '12px'}}>{order.table}</p>
            </div>
            <div>
                <p style={{color: '#707070', fontSize: '16px', marginLeft: '12px'}}>{order.time}</p>
            </div>
            
            
        </div>
    );
}