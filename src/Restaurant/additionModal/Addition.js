import React, { useEffect, useState } from "react";
import OrderService from "../../services/OrderService";
import { AdditionItem } from "./AdditionItem";

export const Addition = ({addition, itemId}) => {

    const [additionItems, setAdditionItems] = useState([]);
    

    useEffect(()=>{

        let items = Object.values(addition.additionItems).map((additionItem) => {
            return additionItem;
        })
        setAdditionItems(items); 

    }, [addition]); 


    const additionItemCLickedd = (additionItem) => {
        console.log('additionItemCLicked par', itemId, additionItem);
        OrderService.instance.updateAdditionItem(itemId, addition, additionItem);

        let items = Object.values(addition.additionItems).map((additionItem) => {
            return additionItem
        })
        setAdditionItems(items);
    }
    


    return(
        <div style={{marginTop: '12px'}}>
            <p style={{fontSize: '16px', color: '#707070', paddingBottom: '4px'}}>{addition.name}</p>
            <div style={{display: 'grid', gridTemplateColumns: 'auto auto'}}>
                {
                    additionItems.map((additionItem) => {
                        return <AdditionItem key={additionItem._id} additionItem={additionItem}  additionItemCLicked={additionItemCLickedd}/>
                    })
                }
            </div>
        </div>
    );
}



// export const Addition = ({addition, itemId}) => {

//     const [additionItems, setAdditionItems] = useState([]);
    

//     useEffect(()=>{

//         let items = Object.values(addition.additionItems).map((additionItem) => {
//             return <AdditionItem key={additionItem.key} additionItem={additionItem}  additionItemCLicked={additionItemCLickedd}/>
//         })
//         setAdditionItems(items); 

//     }, [addition]); 


//     const additionItemCLickedd = (additionItem) => {
//         console.log('additionItemCLicked par', itemId, additionItem);
//         OrderService.instance.updateAdditionItem(itemId, addition, additionItem);

//         let items = Object.values(addition.additionItems).map((additionItem) => {
//             return <AdditionItem key={additionItem.key} additionItem={additionItem} singleChoice={addition.singleChoice} additionItemCLicked={additionItemCLickedd}/>
//         })
//         setAdditionItems(items);
//     }
    


//     return(
//         <div style={{marginTop: '12px'}}>
//             <p style={{fontSize: '16px', color: '#707070', paddingBottom: '4px'}}>{addition.name}</p>
//             <div style={{display: 'grid', gridTemplateColumns: 'auto auto'}}>
//                 {
//                     additionItems
//                 }
//             </div>
//         </div>
//     );
// }

// // additionItems