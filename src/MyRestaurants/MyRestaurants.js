import React, { useEffect, useState } from "react";
import {  useHistory  } from 'react-router-dom';
import { getUserRestaurants } from '../API/restAPI'
import Spinner from "../Spinner/Spinner";
import { MyRestaurantCard } from "./MyRestaurantCard";

export const MyRestaurants = () => {

    const history = useHistory();

    const [showLoader, setShowLoader] = useState(true);
    const [myRestaurantsList, setMyRestaurantsList] = useState([]);

    useEffect( async()=>{

        const response = await getUserRestaurants();
        console.log(response);

        if (response.status === 200) {
            setMyRestaurantsList(response.data.data.restaurants);
            setShowLoader(false);
        } else if (response.status === 401) {
            history.push(`/login`);
        } else if (response.status === 100) {
            const response = await getUserRestaurants();
            setMyRestaurantsList(response.data.data.restaurants);
            setShowLoader(false);
        } else {
            console.log('Unknown error');
        }

    }, []);

    return(
        showLoader 
        ? <div style={{width: '100%', height: '92vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Spinner />
        </div>  
        : 
        myRestaurantsList.length === 0
        ? <div style={{width: '100vw', height: '92vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <h3>You dont have any</h3>
        </div>  
        : 
        <div style={{display: 'grid', margin: '16px', gridTemplateColumns: 'auto' }}>
            {
                // console.log(myRestaurantsList)
                myRestaurantsList.map((rest) => {
                    return <MyRestaurantCard key={rest._id} restaurant={rest} />
                })
            }
        </div>
    );
}