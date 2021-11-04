import React, { useEffect, useState, useRef } from "react";
import { PriceNav } from "../PriceNav/PriceNav";
import { AdditionModal } from "../Restaurant/additionModal/AdditionModal";
import OrderService from "../services/OrderService";
import { OrderItem } from "./OrderItem";
import { useHistory } from "react-router";
import '../App.css'

export const Order = () => {

    const history = useHistory();
    const [items, setItems] = useState([]);
    const [showAdditionsModal, setShowAdditionsModal] = useState(false);
    const additionsItem = useRef('');
    const itemKey = useRef('');

    useEffect(()=>{

        let items = Object.values(OrderService.instance.getOrder().items).map((item)=>{
            return item
        })

        setItems(items)

    }, []);

    const onRemoveItem = () => {
        console.log('onRemoveItem par');
        let items = Object.values(OrderService.instance.getOrder().items).map((item)=>{
            return item
        })

        setItems(items)
    }

    const onItemClicked = (item) => {
        console.log('onItemClicked ', item);

        if (item.hasOwnProperty('additions')) {
            additionsItem.current = item;
            itemKey.current = item.id;
            setShowAdditionsModal(true); 
        }

    }

    const changeAdditionsModalDisplay = () => {
        console.log('changeAdditionsModalDisplay');
        setShowAdditionsModal(false);
    }

    const onGoToInvoice = () => {
        history.push('/invoice')
    }

    return(
        <div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '86vh'}}>
                <div
                    onClick={()=>{onGoToInvoice()}} 
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', backgroundColor: '#f7f7f7', width: '100%', padding: '12px'}}>
                    <img className='goToInvoice' alt='' />
                    <p style={{padding: '0 10px', color: '#333'}}>Go to invoice</p>
                </div>
                <div className="my-order-div" style={{display: 'flex', height: '80vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'start'}}>
                    {
                        items.map((item)=>{
                            return <OrderItem key={item.id} itemKey={item.id} onRemoveItem={onRemoveItem} item={item} onItemClicked={onItemClicked} />
                        })
                    }
                </div>
            </div>
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



// export const Order = () => {

//     const history = useHistory();
//     const [items, setItems] = useState();
//     const [showAdditionsModal, setShowAdditionsModal] = useState(false);
//     const additionsItem = useRef('');
//     const itemKey = useRef('');

//     useEffect(()=>{

//         let items = Object.values(OrderService.instance.getOrder().items).map((item)=>{
//             return <OrderItem key={item.id} itemKey={item.id} onRemoveItem={onRemoveItem} item={item} onItemClicked={onItemClicked} />
//         })

//         setItems(items)

//     }, []);

//     const onRemoveItem = () => {
//         console.log('onRemoveItem par');
//         let items = Object.values(OrderService.instance.getOrder().items).map((item)=>{
//             return <OrderItem key={item.id} itemKey={item.id} onRemoveItem={onRemoveItem} item={item} onItemClicked={onItemClicked} />
//         })

//         setItems(items)
//     }

//     const onItemClicked = (item) => {
//         console.log('onItemClicked ', item);

//         if (item.hasOwnProperty('additions')) {
//             additionsItem.current = item;
//             itemKey.current = item.id;
//             setShowAdditionsModal(true); 
//         }

//     }

//     const changeAdditionsModalDisplay = () => {
//         console.log('changeAdditionsModalDisplay');
//         setShowAdditionsModal(false);
//     }

//     const onGoToInvoice = () => {
//         history.push('/invoice')
//     }

//     return(
//         <div>
//             <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '86vh'}}>
//                 <div
//                     onClick={()=>{onGoToInvoice()}} 
//                     style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', backgroundColor: '#f7f7f7', width: '100%', padding: '12px'}}>
//                     <img className='goToInvoice' alt='' />
//                     <p style={{padding: '0 10px', color: '#333'}}>Go to invoice</p>
//                 </div>
//                 <div className="my-order-div" style={{display: 'flex', height: '80vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'start'}}>
//                     {items}
//                 </div>
//             </div>
//             <div style={{position: 'sticky', bottom: '0px'}}>
//                 <PriceNav />
//             </div>
//             <div style={{display: showAdditionsModal ? 'block' : 'none'}}>
//                 {
//                     showAdditionsModal ? 
//                     <AdditionModal showAdditionsModal={showAdditionsModal} changeAdditionsModalDisplay={changeAdditionsModalDisplay} item={additionsItem.current} itemKey={itemKey.current} />
//                     : ''
            
//                 }
//             </div>
//         </div>
//     );
// }