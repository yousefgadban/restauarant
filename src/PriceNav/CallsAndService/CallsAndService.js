import React, { useEffect } from "react";

import '../../Restaurant/additionModal/AdditionModal.css';
import { Service } from "./Service";

export const CallsAndService = ({changeAdditionsModalDisplay, item, itemKey}) => {

    const callsArray = ['Waiter', 'Bill', 'Notes', 'Order'];
    const serviceArray = ['Salt', 'Sauces', 'Napkins', 'Silverware', 'Toothpicks', 'Clean'];

    useEffect(()=>{
        
    }, []);


    const closeAdditionsModal = () => {
        changeAdditionsModalDisplay()
    }



    const onServiceClicked = (e, service) => {
        e.stopPropagation();
        console.log('onServiceClicked par', service);

        if (service !== 'Order') {

        } else {

        }
    }

    return(
        <div id="myModal" className="modal" style={{ }} onClick={()=>{ closeAdditionsModal()}}>
            <div
                onClick={(e)=>{ e.stopPropagation()}} 
                className="modal-content" style={{padding: '0', margin: '0', boxSizing: 'border-box', borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}}>

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
                
                </div>
                
            </div>

        </div>
    );
}