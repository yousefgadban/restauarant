import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";


export const Waiter = () => {

    const history = useHistory();

    const { restId, restName } = useParams();


    useEffect(()=>{
        console.log('waiter',restId, restName );
    }, []);

    return(
        <div style={{display: 'grid', gridTemplateColumns: 'auto auto', margin: '10px'}}>
            <div
                onClick={()=> {history.push(`/calls/${restId}/${restName}`)}}
                style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid #2196f3', height: '70px', margin: '2px', borderRadius: '10px'}}>
                
                <img  className={`service WaiterService`} alt=""  />
                <p style={{color: '#707070', fontSize: '14px'}}>Calls</p>
            </div>
            <div
                onClick={()=> {history.push(`/orders/${restId}/${restName}`)}}
                style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid #2196f3', height: '70px', margin: '2px', borderRadius: '10px'}}>
                
                <img  className={`service OrderService`} alt="" />
                <p style={{color: '#707070', fontSize: '14px'}}>Orders</p>
            </div>
        </div>    
    );
}