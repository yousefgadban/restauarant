import React, { useEffect, useRef, useState } from "react";

import {getDeliveries} from '../API/restAPI'
import Spinner from "../Spinner/Spinner";
import {  useHistory, useParams  } from 'react-router-dom';
//import './options.css'

import socketIOClient from "socket.io-client";
import { DeliveryItem } from "./DeliveryItem";
// import { OptionModal } from "./OptionModal/OptionModal";
const ENDPOINT = "http://127.0.0.1:4000";

export const Delivery = () => {

    const history = useHistory();

    const { restId, restName } = useParams();

    const [showLoader, setShowLoader] = useState(true);
    const [renderTemp, setRenderTemp] = useState(true);
    const [calls, setCalls] = useState([]);
    const callRef = useRef([])
    const [currentOption, setCurrentOption] = useState('new');
    const [showOptionsModal, setShowOptionsModal] = useState(false);
    const currentCall = useRef(null);

    const options = ['new', 'done'];

    useEffect(async ()=>{
        
        console.log('delivery');

        const response = await getDeliveries();
        console.log(response);

        if (response.status === 200) {
            // const optionCalls = response.data.data.filter((call) => {
            //     return call.status === currentOption;
            // })
            setCalls(response.data.data);
            callRef.current = response.data.data;
            setShowLoader(false);
            

        } else if (response.status === 401) {
            history.push(`/login`);
        } else if (response.status === 100) {
            const response = await getDeliveries();
            // const optionCalls = response.data.data.filter((call) => {
            //     return call.status === currentOption;
            // })
            setCalls(response.data.data);
            callRef.current = response.data.data;
            setShowLoader(false);
        } else {
            console.log('Unknown error');
        }

        socketListenToNewDelivery()
        

    }, []);


    const socketListenToNewDelivery = () => {
        
        const socket = socketIOClient(ENDPOINT);
        socket.on("connect", () => {
            console.log(`You connected with id: ${socket.id}`);
            socket.emit('joinDelivery')

            socket.on(`Delivery`, (call)=> {
                console.log('new call', call);
                console.log('calls', calls, callRef.current);

                const newCall = callRef.current.find((c)=> {
                    return call._id === c._id;
                })

                console.log(newCall);

                if (!newCall) {
                    callRef.current.push(call);

                    console.log('callRef.current', callRef.current);
                    
                    setRenderTemp(true);
                    setTimeout(() => {
                        setCalls(callRef.current);
                        setRenderTemp(false);
                    }, 1000);
                } else {
                    newCall.status = call.status;
                    
                    console.log('callRef.current changed', callRef.current);

                    setRenderTemp(true);
                    setTimeout(() => {
                        setCalls(callRef.current);
                        setRenderTemp(false);
                    }, 1000);
                }

            })
        });
    }


    const onCallClicked = (call) => {
        console.log('onCallClicked par', call.table);
        currentCall.current = call
        setShowOptionsModal(true)
    }

    const changeOptionsModalDisplay = () => {
        console.log('changeOptionsModalDisplay');
        setShowOptionsModal(false)
    }

    return(
        showLoader 
        ? <div style={{width: '100%', height: '92vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Spinner />
        </div>  
        : 
        <div>
            
            <div style={{display: 'grid', gridTemplateColumns: 'auto'}}>
                {
                    callRef.current.filter((call)=>{
                        return call.status === 'new';
                    }).map((call)=>{
                        return  <DeliveryItem key={call._id} call={call} onCallClicked={onCallClicked} />
                    })
                }
            </div>

        </div>
        
    );
}