import React, { useEffect } from "react";
import {  useHistory  } from 'react-router-dom';

export const MyRestaurantCard = ({restaurant}) => {

    const history = useHistory();

    useEffect(()=>{
        
    }, []);

    const onRestClicked = () => {
        console.log('onRestClicked', restaurant._id);
        history.push(`/waiter/${restaurant._id}/${restaurant.name}`);
    }

    return(
        <div
            onClick={()=> {onRestClicked()}}
            style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid #c8c8c8', borderRadius: '10px'}}>
            <div style={{width: '100%', height: '170px', background: `url(${restaurant.urls[0]}) no-repeat center center/cover`, borderTopRightRadius: '10px', borderTopLeftRadius: '10px'}}>

            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '40px'}}>
                <h4 style={{fontSize: '16px', color: '#707070'}}>{restaurant.name}</h4>
            </div>
        </div>
    );
}