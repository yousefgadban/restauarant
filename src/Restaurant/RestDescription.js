import React, { useEffect, useRef, useState } from "react";
import TestService from '../services/TestService'
import './restaurant.css'

export const RestDescription = () => {

    const [restName, setRestName] = useState('');
    const restLocation = useRef('');

    useEffect(()=>{

        setRestName(TestService.instance.getName());
        restLocation.current = TestService.instance.getLocation();
        
    }, []);

    return(
        <div style={{margin: '20px', border: '1px solid #2196f3', padding: '15px', borderRadius: '12px'}}>
            <div style={{display: 'flex', alignContent: 'center', justifyContent: 'space-between'}}>

                <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center'}}>
                    <p>{restName}</p>
                    <p>{restLocation.current}</p>
                </div>

                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                    <i className="location arrow large icon" style={{color: '#2196f3', width: '50px', height: '50px'}}></i>
                </div>


            </div>
        </div>
    );
}