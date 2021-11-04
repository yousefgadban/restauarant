import React, { useEffect } from "react";
import { useHistory } from "react-router";

export const Waiter = () => {

    const history = useHistory();
    useEffect(()=>{

    }, []);

    return(
        <div style={{display: 'grid', gridTemplateColumns: 'auto auto'}}>
            <div
                onClick={()=> {history.push('/calls')}}
                style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid #2196f3', height: '70px', margin: '2px', borderRadius: '10px'}}>
                
                <img  className={`service WaiterService`} alt=""  />
                <p style={{color: '#707070', fontSize: '14px'}}>Calls</p>
            </div>
            <div
                onClick={()=> {history.push('/orders')}}
                style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid #2196f3', height: '70px', margin: '2px', borderRadius: '10px'}}>
                
                <img  className={`service OrderService`} alt="" />
                <p style={{color: '#707070', fontSize: '14px'}}>Orders</p>
            </div>
        </div>    
    );
}