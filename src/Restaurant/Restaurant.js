import React, { useEffect, useRef, useState } from "react";
import { PriceNav } from "../PriceNav/PriceNav";
import { AdditionModal } from "./additionModal/AdditionModal";
import { RestDescription } from "./RestDescription";
import { RestImages } from "./RestImages";
import { RestMenu } from "./RestMenu";
import { v4 as uuidv4 } from 'uuid';
import OrderService from "../services/OrderService";

export const Restaurant = () => {

    const [showAdditionsModal, setShowAdditionsModal] = useState(false);
    const additionsItem = useRef('');
    const itemKey = useRef('');
    // const [additionsModals, setAdditionsModals] = useState([])


    useEffect(() => {

    }, []);


    const onAddItemClicked = (item) => {
        console.log('showAdditionsModal', item);

        let uuid = uuidv4();
        console.log('onAddItemToCartClicked ', item.id, uuid);
        
        OrderService.instance.addItemToOrder(item, uuid);

        if (item.hasOwnProperty('additions')) {
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
        <div>
            {console.log('render', showAdditionsModal)}
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