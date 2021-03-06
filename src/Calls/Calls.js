import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { CallItem } from "./CallItem";
import {getRestaurantCalls} from '../API/restAPI'
import Spinner from "../Spinner/Spinner";
import {  useHistory, useParams  } from 'react-router-dom';
import './options.css'

import socketIOClient from "socket.io-client";
import { OptionModal } from "./OptionModal/OptionModal";
const ENDPOINT = "http://127.0.0.1:4000";

export const Calls = () => {

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
        
        const response = await getRestaurantCalls(restId);
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
            const response = await getRestaurantCalls(restId);
            // const optionCalls = response.data.data.filter((call) => {
            //     return call.status === currentOption;
            // })
            setCalls(response.data.data);
            callRef.current = response.data.data;
            setShowLoader(false);
        } else {
            console.log('Unknown error');
        }

        socketListenToNewCalls()
        

    }, []);


    const socketListenToNewCalls = () => {
        
        const socket = socketIOClient(ENDPOINT);
        socket.on("connect", () => {
            console.log(`You connected with id: ${socket.id}`);
            socket.emit('joinRestaurantCalls', {restId})

            socket.on(`${restId}-calls`, (call)=> {
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


    // const getCallsData = async () => {
    //     let restaurantID = '1';
    //     let response = await axios.get(`https://6177eef89c328300175f5c4a.mockapi.io/api/v1/restaurants/${restaurantID}/calls`, {});
    //     console.log(response);

    //     let calls = response.data.map((call)=>{
    //         return <CallItem key={call.id} call={call} />
    //     })
    //     setCalls(calls)
    // }


    const onOptionClicked = (option) => {
        console.log('onOptionClicked', option);
        if (option !== currentOption) {
            setCurrentOption(option)
        }
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
            <div style={{display: 'grid', gridTemplateColumns: 'auto auto', margin: '2px 2px'}}>
                {
                    options.map((option)=>{
                        return <div className={currentOption === option ? "option selected" : "option"}   key={option} onClick={()=>{onOptionClicked(option)}} >{option}</div>
                    })
                }
            </div>
            <hr />
            <div style={{display: 'grid', gridTemplateColumns: 'auto'}}>
                {
                    callRef.current.filter((call)=>{
                        return call.status === currentOption;
                    }).map((call)=>{
                        return <CallItem key={call._id} call={call} onCallClicked={onCallClicked} />
                    })

                    // callRef.current.map((call)=>{
                    //     return <CallItem key={call._id} call={call} />
                    // })
                }
            </div>

            <div style={{display: showOptionsModal ? 'block' : 'none'}}>
                {
                    showOptionsModal ? 
                    <OptionModal options={options} changeOptionsModalDisplay={changeOptionsModalDisplay} currentCall={currentCall.current}  kind="calls"/>
                    : ''
                }
            </div>
        </div>
        
    );
}