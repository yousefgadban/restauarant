import React, { useEffect, useState } from "react";
import Spinner from "../../Spinner/Spinner";
import {  useHistory } from 'react-router-dom';
import { changeCallStatus, changeOrderStatus } from '../../API/restAPI';

import './OptionModal.css';

export const OptionModal = ({changeOptionsModalDisplay, options, currentCall, kind}) => {

    const history = useHistory();

    const [showLoader, setShowLoader] = useState(false);

    useEffect(()=>{
        
    }, []);


    const closeOptionsModal = () => {
        changeOptionsModalDisplay()
    }

    const onOptionClicked = async (e, option) => {
        e.stopPropagation();
        console.log('onOptionClicked', option);
        if (currentCall.status !== option) {

            if (kind === 'calls') {
                setShowLoader(true);
                const params = {
                    restaurantID: currentCall.restaurantID, 
                    callID: currentCall._id,
                    newStatus: option
                }

                const response = await changeCallStatus(params);
                console.log(response);

                if (response.status === 200) {
                    closeOptionsModal();
                } else if (response.status === 401) {
                    history.push(`/login`);
                } else if (response.status === 100) {
                    closeOptionsModal();
                } else {
                    console.log('Unknown error');
                    closeOptionsModal();
                }
            } else {
                setShowLoader(true);
                const params = {
                    restaurantID: currentCall.restaurantID, 
                    callID: currentCall._id,
                    newStatus: option
                }

                const response = await changeOrderStatus(params);
                console.log(response);

                if (response.status === 200) {
                    closeOptionsModal();
                } else if (response.status === 401) {
                    history.push(`/login`);
                } else if (response.status === 100) {
                    closeOptionsModal();
                } else {
                    console.log('Unknown error');
                    closeOptionsModal();
                }
            }
            
        }
    }

    const changeStatus = (option) => {

    }

    const timeFormatFromTS = (ts) => {
        let date = new Date(ts);
        let hours = date.getHours() < 10 ? '0'+date.getHours() : date.getHours()
        let minutes = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes();
        return hours+':'+minutes;
    }

    return(
        <div id="myModal" className="option-modal" style={{ }} onClick={()=>{ closeOptionsModal()}}>
            <div className="option-modal-content" style={{padding: '0', margin: '0', boxSizing: 'border-box', borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}}>

                <div style={{backgroundColor: '#f7f7f7', padding: '8px', margin: '0', boxSizing: 'border-box', borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}}>
                    <span onClick={()=>{ closeOptionsModal()}} className="close">&times;</span>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px 0'}}>
                        <div style={{fontSize: '14px', color: '#333', width: '100%', display:'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '5px', paddingRight: '20px' }}>
                            <p>{kind === 'calls' ? currentCall.service : 'Order'}</p>
                            <p>{currentCall.table}</p>
                            <p>{timeFormatFromTS(currentCall.time)}</p>
                        </div>
                    </div>
                    <hr />
                    {
                        showLoader 
                        ? <div style={{width: '100%', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Spinner />
                            <p style={{fontSize: '14px', color: '#707070', padding: '0px 8px'}}>Changing status ...</p>
                        </div>  
                        : 
                        <div style={{display: 'grid', gridTemplateColumns: 'auto auto', margin: '2px 2px'}}>
                            {
                                options.map((option, i)=>{
                                    return <div className={currentCall.status === option ? "option selected" : "option"} style={{ color: option === 'delete' ? 'red' : currentCall.status === option ? 'white' : '#2196f3'}}  key={option} onClick={(e)=>{onOptionClicked(e, option)}} >{option}</div>
                                })
                            }
                        </div>
                    }
                </div>
                
            </div>

        </div>
    );
}