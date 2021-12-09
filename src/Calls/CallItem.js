import React, { useEffect } from "react";
import '../PriceNav/CallsAndService/CallsAndService.css'

export const CallItem = ({call, onCallClicked}) => {

    useEffect(()=>{

    }, []);

    const timeFormatFromTS = (ts) => {
        let date = new Date(ts);
        let hours = date.getHours() < 10 ? '0'+date.getHours() : date.getHours()
        let minutes = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes();
        return hours+':'+minutes;
    }

    const callClicked = () => {
        onCallClicked(call);
    }

    return(
        <div 
            onClick={() => {callClicked()}}
            style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between',  border: '1px solid #2196f3', borderRadius: '12px', margin: '2px 8px', padding: '0 12px'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div
                    style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '70px'}}>
                
                    <img  className={`service ${call.service}Service`} alt="" />
                    <p style={{color: '#707070', fontSize: '14px'}}>{call.service}</p>
                </div>
                <p style={{color: '#707070', fontSize: '16px', marginLeft: '12px'}}>{call.table}</p>
            </div>
            <div>
                <p style={{color: '#707070', fontSize: '16px', marginLeft: '12px'}}>{timeFormatFromTS(call.time)}</p>
            </div>
            
            
        </div>
    );
}