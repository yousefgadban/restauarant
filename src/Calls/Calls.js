import React, { useEffect, useState } from "react";
import axios from "axios";
import { CallItem } from "./CallItem";

export const Calls = () => {

    const [calls, setCalls] = useState([]);

    useEffect(()=>{
        getCallsData();
    }, []);

    const onReloadClicked = () => {
        console.log('onReloadClicked');
        getCallsData();
    }

    const getCallsData = async () => {
        let restaurantID = '1';
        let response = await axios.get(`https://6177eef89c328300175f5c4a.mockapi.io/api/v1/restaurants/${restaurantID}/calls`, {});
        console.log(response);

        let calls = response.data.map((call)=>{
            return <CallItem key={call.id} call={call} />
        })
        setCalls(calls)
    }

    return(
        <div>
            <input 
                type='button' 
                value='reload' 
                onClick={()=>onReloadClicked()}
                style={{backgroundColor: '#2196f3', border: '1px solid #2196f3', borderRadius: '7px', padding: '10px 15px', margin: '12px', color: 'white' }} />
                <br />
                <div style={{display: 'grid', gridTemplateColumns: 'auto'}}>
                    {
                        calls
                    }
                </div>
        </div>
    );
}