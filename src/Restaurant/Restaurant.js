import React, { useEffect, useRef, useState } from "react";
import { PriceNav } from "../PriceNav/PriceNav";
import { AdditionModal } from "./additionModal/AdditionModal";
import { RestDescription } from "./RestDescription";
import { RestImages } from "./RestImages";
import { RestMenu } from "./RestMenu";
import { v4 as uuidv4 } from 'uuid';
import OrderService from "../services/OrderService";
import { getRestaurantData } from '../API/restAPI';
import { useParams } from "react-router";
import  RestaurantService from '../services/RestaurantService';
import Spinner from "../Spinner/Spinner";

export const Restaurant = () => {

    const { restId, restName } = useParams();
    const [showAdditionsModal, setShowAdditionsModal] = useState(false);
    const [showLoader, setShowLoader] = useState(true);
    const additionsItem = useRef('');
    const itemKey = useRef('');


    useEffect(async () => {

        console.log('rest details', restId, restName);
        const response = await getRestaurantData(restId);
        console.log(response);
        RestaurantService.instance.setRestaurantData(response.data);
        RestaurantService.instance.setRestaurantID(restId);
        setShowLoader(false);

    }, []);


    const onAddItemClicked = (item) => {
        console.log('showAdditionsModal', item);

        let uuid = uuidv4();
        console.log('onAddItemToCartClicked ', item.id, uuid);
        
        OrderService.instance.addItemToOrder(item, uuid); 

        if (item.additions.length !== 0) {
            additionsItem.current = item;
            itemKey.current = uuid;
            setShowAdditionsModal(true); 
            // setAdditionsModals([])
            // let arr = additionsModals;
            // arr.push(<AdditionModal showAdditionsModal={showAdditionsModal} changeAdditionsModalDisplay={changeAdditionsModalDisplay} item={item} itemKey={itemKey.current} />)
            // setAdditionsModals(arr)
        }

        
    }


    const changeAdditionsModalDisplay = () => {
        console.log('changeAdditionsModalDisplay');
        setShowAdditionsModal(false)
    }

    return (
        showLoader 
        ? <div style={{width: '100%', height: '92vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Spinner />
        </div>  
        : <div>
            <RestImages />
            <RestDescription />
            <RestMenu onAddItemClicked={onAddItemClicked} />
            <div style={{position: 'sticky', bottom: '0px'}}>
                <PriceNav />
            </div>
            <div style={{display: showAdditionsModal ? 'block' : 'none'}}>
                {
                    showAdditionsModal ? 
                    <AdditionModal showAdditionsModal={showAdditionsModal} changeAdditionsModalDisplay={changeAdditionsModalDisplay} item={additionsItem.current} itemKey={itemKey.current} />
                    : ''
            
                }
            </div>

        </div>
    );
}