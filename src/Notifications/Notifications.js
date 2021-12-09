import React, { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import {  useHistory } from 'react-router-dom';

import './Notifications.css';

export const Notifications = ({changeNotificationsModalDisplay, kind, step}) => {

    const history = useHistory();

    let firstStepMsg = 'Order recieved';
    let secondStepMsg = 'Order in progress';
    let thirdStepMsg = 'Enjoy your order';

    let deliveryFirstStepMsg = 'Order recieved';
    let deliverySecondStepMsg = 'Sender moving to your way';
    let deliveryThirdStepMsg = 'Enjoy your order';

    useEffect(()=>{

        console.log(kind, step);

        setTimeout(() => {
            changeNotificationsModalDisplay()
        }, 5000);
        
    }, []);


    const closeNotificationsModal = () => {
        changeNotificationsModalDisplay()
    }


    const timeFormatFromTS = (ts) => {
        let date = new Date(ts);
        let hours = date.getHours() < 10 ? '0'+date.getHours() : date.getHours()
        let minutes = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes();
        return hours+':'+minutes;
    }

    return(
        <div id="myModal" className="notification-modal" onClick={()=>{ closeNotificationsModal()}}>
            <div className="notification-modal-content" style={{padding: '0', margin: '0', boxSizing: 'border-box', borderRadius: '0px', border: '1px solid #2196f3'}}>

                <div style={{backgroundColor: '#f7f7f7', padding: '8px', margin: '0', boxSizing: 'border-box', borderRadius: '0px'}}>
                    <span onClick={()=>{ closeNotificationsModal()}} className="close">&times;</span>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px 0'}}>
                        <div style={{fontSize: '14px', color: '#333', width: '100%', display:'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '5px', paddingRight: '20px' }}>
                            <p>{'Order Status'}</p>
                            <p>{timeFormatFromTS(new Date().getTime())}</p>
                        </div>
                    </div>
                    <hr />
                    {
                        <div style={{height: '140px', position: 'relative', display: 'flex', justifyContent: 'center', paddingTop: '50px'}}>
                            
                            <div style={{ width:'100%', height: '3px', backgroundColor: '#c8c8c8', top: '40px', margin: '0 30px'  }}></div>
                            
                            <div style={{position: 'absolute', width: '20px', height: '20px', backgroundColor: '#2196f3', top: '40px', left: '30px', borderRadius: '50%'}} ></div>
                            <p style={{position: 'absolute', width: '60px', fontSize: '12px', color: '#2196f3', top: '70px', left: '10px', textAlign: 'center'}} >
                                {kind === 'Delivery' ? deliveryFirstStepMsg : firstStepMsg}
                            </p>

                            <div style={{display: step < 2 ? 'none' : 'block', position: 'absolute', width: '45%', height: '3px', backgroundColor: '#2196f3', top: '50px', left: '30px'}} ></div>

                            <div style={{position: 'absolute', width: '20px', height: '20px', backgroundColor: step > 1 ? '#2196f3' : '#c8c8c8', top: '40px', left: '50%', borderRadius: '50%'}} ></div>
                            <p style={{position: 'absolute', width: '60px', fontSize: '12px', color: step > 1 ? '#2196f3' : '#707070', top: '70px', left: '45%', textAlign: 'center'}} >
                                {kind === 'Delivery' ? deliverySecondStepMsg : secondStepMsg}
                            </p>

                            <div style={{display: step == 3 ? 'block' : 'none', position: 'absolute', width: '45%', height: '3px', backgroundColor: '#2196f3', top: '50px', left: '45%'}} ></div>
                            
                            <div style={{position: 'absolute', width: '20px', height: '20px', backgroundColor: step == 3 ? '#2196f3' : '#c8c8c8', top: '40px', right: '30px', borderRadius: '50%'}} ></div>
                            <p style={{position: 'absolute', width: '60px', fontSize: '12px', color: step == 3 ? '#2196f3' : '#707070', top: '70px', right: '10px', textAlign: 'center'}} >
                                {kind === 'Delivery' ? deliveryThirdStepMsg : thirdStepMsg}
                            </p>


                        </div>
                    }
                </div>
                
            </div>

        </div>
    );
}