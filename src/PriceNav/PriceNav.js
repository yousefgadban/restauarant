import React, { useEffect } from "react";

export const PriceNav = () => {

    useEffect(()=>{
        
    });

    return(
        <div style={{height: '6vh', width: '100vw', backgroundColor: '#e7e7e7', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0px 3vw', borderTopLeftRadius: '16px', borderTopRightRadius: '16px'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <p style={{padding: '2vh 0'}}>Price: <span>100 &#8362;</span> </p>
            </div>
            <img className="open-service-img" alt="" width='28px' height='28px' />
           
        </div>
    );
}