import React, { useEffect, useState } from "react";

import { OrderOption } from "./OrderOption";
import { Service } from "./Service";

import './CallsAndService.css';

export const CallsAndService = ({changeAdditionsModalDisplay, item, itemKey}) => {

    const callsArray = ['Waiter', 'Bill', 'Notes', 'Order'];
    const serviceArray = ['Salt', 'Sauces', 'Napkins', 'Silverware', 'Toothpicks', 'Clean'];
    const orderOptionsArray = ['Restaurant', 'Take-away', 'Delivery'];

    const [showOrderOptions, setShowOrderOptions] = useState(false);

    useEffect(()=>{
        
    }, []);


    const closeAdditionsModal = () => {
        changeAdditionsModalDisplay()
    }



    const onServiceClicked = (service) => {
     
        console.log('onServiceClicked par', service);

        if (service === 'Order') {
            setShowOrderOptions(true)
        }

    }

    
    const onOrderOptionClicked = (service) => {
     
        console.log('onOrderOptionClicked par', service);

        if (service === 'Order') {
            setShowOrderOptions(true)
        }

        if (service === 'orderCommited') {
            console.log('close modal');
            changeAdditionsModalDisplay();
        }
    }


    return(
        <div id="myModal" className="call-service-modal" style={{ }} onClick={()=>{ closeAdditionsModal()}}>
            <div
                onClick={(e)=>{ e.stopPropagation()}} 
                className="call-service-modal-content" style={{padding: '0', margin: '0', boxSizing: 'border-box', borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}}>
 
                {
                    !showOrderOptions ?
                    <div style={{backgroundColor: '#f7f7f7', padding: '8px', margin: '0', boxSizing: 'border-box', borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}}>
                        <span onClick={()=>{ closeAdditionsModal()}} className="close">&times;</span>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px 0'}}>
                            <div style={{fontSize: '18px', color: '#2196f3'}}>Calls</div>
                        </div>
                        <hr />
                        <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto auto'}} >
                            {
                                callsArray.map((call, i)=>{ 
                                    return <Service key={i} service={call} onServiceClicked={onServiceClicked} />
                                })
                                
                            }
                        </div>
                        <hr />
                        <div
                            onClick={(e)=>{onServiceClicked(e)}} 
                            style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px 0'}}>
                            <div style={{fontSize: '18px', color: '#2196f3'}}>Service</div>
                        </div>
                        <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto'}} >
                            {
                                serviceArray.map((call, i)=>{ 
                                    return <Service key={i} service={call} />
                                })
                                
                            }
                        </div>
                    
                    </div> : 

                    <div style={{backgroundColor: '#f7f7f7', padding: '8px', margin: '0', boxSizing: 'border-box', borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}}>
                        <span onClick={()=>{ closeAdditionsModal()}} className="close">&times;</span>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px 0'}}>
                            <div style={{fontSize: '18px', color: '#2196f3'}}>Order Options</div>
                        </div>
                        <hr />
                        <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto', alignItems: 'center', height: '260px'}} >
                            {
                                orderOptionsArray.map((call, i)=>{ 
                                    return <OrderOption key={i} service={call} onOrderOptionClicked={onOrderOptionClicked} />
                                })
                                
                            }
                        </div>
                    </div>

                }
                
            </div>

        </div>
    );
}