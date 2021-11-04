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
        <div style={{margin: '20px'}}>
            <div style={{display: 'flex', alignContent: 'center', justifyContent: 'space-between'}}>

                <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center'}}>
                    <div style={{color: '#707070', fontSize: '16px'}}>{restName}</div>
                    <div style={{color: '#707070', fontSize: '14px'}}>{restLocation.current}</div>
                </div>

                <img className='rest-details-img' alt=''/>
            </div>
            <hr style={{marginTop: '16px'}}/>
        </div>
    );
}