import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { CallItem } from "./CallItem";
import {getRestaurantCalls} from '../API/restAPI'
import Spinner from "../Spinner/Spinner";
import {  useHistory, useParams  } from 'react-router-dom';

import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4000";

export const Calls = () => {

    const history = useHistory();

    const { restId, restName } = useParams();

    const [showLoader, setShowLoader] = useState(true);
    const [renderTemp, setRenderTemp] = useState(true);
    const [calls, setCalls] = useState([]);
    const callRef = useRef([])

    

    useEffect(async ()=>{
        
        const response = await getRestaurantCalls(restId);
        console.log(response);

        if (response.status === 200) {
            setCalls(response.data.data);
            callRef.current = response.data.data
            setShowLoader(false);
            //socketListenToNewCalls();
            

        } else if (response.status === 401) {
            history.push(`/login`);
        } else if (response.status === 100) {
            const response = await getRestaurantCalls(restId);
            setCalls(response.data.data);
            callRef.current = response.data.data
            setShowLoader(false);
            //socketListenToNewCalls();
        } else {
            console.log('Unknown error');
        }

        socketListenToNewCalls()
        

    }, []);


    const socketListenToNewCalls = () => {
        
        const socket = socketIOClient(ENDPOINT);
        socket.on("connect", () => {
            console.log(`You connected with id: ${socket.id}`);
            socket.emit('joinRestaurant', {restId})

            socket.on(restId, (call)=> {
                console.log('new call', call);
                console.log('calls', calls, callRef.current);

                callRef.current.push(call);

                console.log('callRef.current', callRef.current);
                
                setRenderTemp(true);
                setTimeout(() => {
                    setCalls(callRef.current);
                    setRenderTemp(false);
                }, 1000);
                

            })
        });
    }

    const onReloadClicked = () => {
        console.log('onReloadClicked');
        //getCallsData();
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

    return(
        showLoader 
        ? <div style={{width: '100%', height: '92vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Spinner />
        </div>  
        : 
        <div>
            <input 
                type='button' 
                value='reload' 
                onClick={()=>onReloadClicked()}
                style={{backgroundColor: '#2196f3', border: '1px solid #2196f3', borderRadius: '7px', padding: '10px 15px', margin: '12px', color: 'white' }} />
                <br />
                <div style={{display: 'grid', gridTemplateColumns: 'auto'}}>
                    {
                        callRef.current.map((call)=>{
                            return <CallItem key={call._id} call={call} />
                        })
                    }
                </div>
        </div>
    );
}