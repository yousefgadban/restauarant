import React, { useEffect } from "react";

export const CategoryItem = ({item}) => {

    useEffect(()=>{
        
    });

    const onAddItemToCartClicked = () => {
        console.log('onAddItemToCartClicked ', item.id);
    }

    return(
        <div style={{width: '200px', height: '220px',  marginRight: '2vw', display: 'inline-block', borderRadius: '12px', border: '1px solid #c8c8c8'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{width: '200px', height: '170px', background: `url(${item.url}) no-repeat center `, borderTopRightRadius: '10px', borderTopLeftRadius: '10px'}}>

                </div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', height: '50px', justifyContent: 'space-between', padding: '0 8px', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center'}}>
                    <div style={{fontSize: '16px', color: '#333'}}>{item.name}</div>
                    <div style={{fontSize: '12px', color: '#707070'}}>{item.price} <span style={{fontSize: '14px', color: '#707070'}}>&#8362;</span></div>
                </div>
                <div 
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                    onClick={() => {onAddItemToCartClicked()}}>
                    <img className="add-to-cart-img" alt=""/>
                </div>
            </div>
        </div>

    );
}