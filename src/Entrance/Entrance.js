import React, { useEffect } from "react";
import './Entrance.css'

export const Entrance = () => {

    useEffect(()=>{

    }, []);

    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', width: '100vw', height: '100vh'}}>
            <div className="asd" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', border: '1px solid #ffffff', borderRadius: '50%', height: '150px', width: '150px'}}>
                <img className="entrance-img" />
            </div>
            <h3 style={{color: '#2196f3'}}>Loading...</h3>
        </div>
    );
}
