import React, { useEffect } from "react";
import { useState } from "react";
import OrderService from "../services/OrderService";
import { priceService } from '../services/priceService';
import { CallsAndService } from "./CallsAndService/CallsAndService";

export const PriceNav = () => {

    const [price, setPrice] = useState(0);
    const [showAdditionsModal, setShowAdditionsModal] = useState(false);

    useEffect(()=>{
        setPrice(OrderService.instance.getPrice());
        priceService.getPrice().subscribe(price => {
            console.log('price', price);
            setPrice(price);
        });

    }, []);

    const showCallsAndService = () => {
        console.log('showCallsAndService');
        setShowAdditionsModal(true)
    }

    const changeAdditionsModalDisplay = () => {
        console.log('changeAdditionsModalDisplay');
        setShowAdditionsModal(false)
    }

    return(
        <div style={{height: '6vh', width: '100vw', backgroundColor: '#e7e7e7', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0px 3vw', borderTopLeftRadius: '16px', borderTopRightRadius: '16px'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <p style={{padding: '2vh 0'}}>Price: <span>{price} &#8362;</span> </p>
            </div>
            <img
                onClick={() => {showCallsAndService()}} 
                className="open-service-img" alt="" width='28px' height='28px' />
            <div style={{display: showAdditionsModal ? 'block' : 'none'}}>
                {
                    showAdditionsModal ? 
                    <CallsAndService showAdditionsModal={showAdditionsModal} changeAdditionsModalDisplay={changeAdditionsModalDisplay} />
                    : ''
            
                }
            </div>
           
        </div>
    );
}



// class PriceNav extends React.Component {

//     // useEffect(()=>{
        
//     //     const subscription = priceService.getPrice().subscribe(price => {
//     //         console.log('price', price);
//     //     });

//     // }, []);

//     componentDidMount() {
//         // subscribe to home component messages
//         this.subscription = priceService.getPrice().subscribe(price => {
//             console.log('price', price);
//         });
//     }

//     componentWillUnmount() {
//         // unsubscribe to ensure no memory leaks
//         this.subscription.unsubscribe();
//     }

//     render() {
//     return(
//         <div style={{height: '6vh', width: '100vw', backgroundColor: '#e7e7e7', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0px 3vw', borderTopLeftRadius: '16px', borderTopRightRadius: '16px'}}>
//             <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
//                 <p style={{padding: '2vh 0'}}>Price: <span>100 &#8362;</span> </p>
//             </div>
//             <img className="open-service-img" alt="" width='28px' height='28px' />
           
//         </div>
//     );
//     }
// }

// export {PriceNav};