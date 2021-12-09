import React, { useEffect } from "react";
import {  useHistory } from 'react-router-dom';
import { useState } from "react/cjs/react.development";
import { acceptDelivery } from '../API/restAPI';
import Spinner from "../Spinner/Spinner";

export const DeliveryItem = ({call, onCallClicked}) => {

    const history = useHistory();

    const [showLoader, setShowLoader] = useState(false);

    useEffect(()=>{

    }, []);

    const timeFormatFromTS = (ts) => {
        let date = new Date(ts);
        let hours = date.getHours() < 10 ? '0'+date.getHours() : date.getHours()
        let minutes = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes();
        return hours+':'+minutes;
    }

    const callClicked = () => {
        //onCallClicked(call);
    }

    const onAcceptDelivery = async () => {
        console.log('onAcceptDelivery');

         setShowLoader(true);
        const params = {
            restaurantID: call.restaurantID, 
            callID: call._id
        }

        const response = await acceptDelivery(params);
        console.log(response);

        if (response.status === 200) {
            setShowLoader(false);
        } else if (response.status === 401) {
            history.push(`/login`);
        } else if (response.status === 100) {
            const response = await acceptDelivery(params);
            console.log(response);
            setShowLoader(false);
        } else {
            console.log('Unknown error');

        }
    }

    return(
        <div 
            onClick={() => {callClicked()}}
            style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between',  border: '1px solid #2196f3', borderRadius: '12px', margin: '4px 8px', padding: '0 12px'}}>
            {
                 showLoader 
                 ? <div style={{width: '100%', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                     <Spinner />
                     <p style={{fontSize: '14px', color: '#707070', padding: '0px 8px'}}>Changing status ...</p>
                 </div>  
                 : 
                 <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <div
                            style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '70px'}}>
                        
                            <img  className={`service DeliveryService`} alt="" />
                            <p style={{color: '#707070', fontSize: '16px'}}>{call.restaurantName}</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center'}}>
                            <p style={{color: '#707070', fontSize: '16px', marginLeft: '16px'}}>{call.name}</p>
                            <p style={{color: '#707070', fontSize: '16px', marginLeft: '16px'}}>{call.price} &#8362;</p>
                        </div>
                    </div>
                    <div
                        onClick={() => {onAcceptDelivery()}}
                        style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '70px'}}>
                    
                        <img  className={`service DeliveryCheckedImg`} alt="" />
                        <p style={{color: '#707070', fontSize: '16px'}}>{timeFormatFromTS(call.time)}</p>
                    </div>
                </div>
            }
            
            
        </div>
    );
}