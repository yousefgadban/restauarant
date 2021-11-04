import React, { useEffect } from "react";

export const AdditionItem = ({additionItem, additionItemCLicked}) => {

    useEffect(()=>{
    
    }, []);

    const onAdditionItemClicked = (e) => {
        e.stopPropagation();
        console.log('onAdditionItemCLicked', additionItem);
        additionItemCLicked(additionItem);
    }

    return(
        <div 
        onClick={(e)=>{onAdditionItemClicked(e)}}
        style={{position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', 
        justifyContent: 'center', height: '50px', border: '1px solid', margin: '2px', borderRadius: '8px', 
        backgroundColor: additionItem.default ? '#2196f3': '#ffffff', borderColor: additionItem.default ? '#2196f3': '#707070',
        color: additionItem.default ? '#ffffff': '#707070'}}>
            <p>{additionItem.name}</p>
            <p style={{fontSize: '12px', display: additionItem.price !== 0 ? 'block' : 'none'}}>{additionItem.price} &#8362;</p>
            <i className="check icon" style={{position: 'absolute', top: '8px', right: '8px', color: '#ffffff'}}></i>
        </div>
    );
}