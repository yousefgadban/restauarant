import React, { useEffect } from "react";
import { Addition } from "./Addition";

import './AdditionModal.css';

export const AdditionModal = ({changeAdditionsModalDisplay, item, itemKey}) => {

    useEffect(()=>{
        
    }, []);


    const closeAdditionsModal = () => {
        changeAdditionsModalDisplay()
    }

    return(
        <div id="myModal" className="addition-modal" style={{ }} onClick={()=>{ closeAdditionsModal()}}>
            <div className="addition-modal-content" style={{padding: '0', margin: '0', boxSizing: 'border-box', borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}}>

                <div style={{backgroundColor: '#f7f7f7', padding: '8px', margin: '0', boxSizing: 'border-box', borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}}>
                    <span onClick={()=>{ closeAdditionsModal()}} className="close">&times;</span>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px 0'}}>
                        <div style={{fontSize: '18px', color: '#2196f3'}}>{item.name}</div>
                    </div>
                    <hr />
                    <div >
                        {
                            //  console.log(item)

                            item.additions.length !== 0 ? Object.values(item.additions).map(addition => {
                                return <Addition key={addition._id} addition={addition} itemId={itemKey} />
                            }) : '' 

                            // OrderService.instance.getItemAdditions(item.key)?
                            // OrderService.instance.getItemAdditions(item.key).map(addition => {
                            //     return <Addition key={addition.key} addition={addition} itemId={item.id} />
                            // }) : '' 
                        }
                    </div>
                
                </div>
                
            </div>

        </div>
    );
}