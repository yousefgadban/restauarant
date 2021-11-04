import React, { useEffect } from "react";
import '../PriceNav/CallsAndService/CallsAndService.css'

export const CallItem = ({call}) => {

    useEffect(()=>{

    }, []);

    return(
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between',  border: '1px solid #2196f3', borderRadius: '12px', margin: '2px', padding: '0 12px'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div
                    style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '70px'}}>
                
                    <img  className={`service ${call.name}Service`} alt="" />
                    <p style={{color: '#707070', fontSize: '14px'}}>{call.name}</p>
                </div>
                <p style={{color: '#707070', fontSize: '16px', marginLeft: '12px'}}>{call.table}</p>
            </div>
            <div>
                <p style={{color: '#707070', fontSize: '16px', marginLeft: '12px'}}>{call.time}</p>
            </div>
            
            
        </div>
    );
}