import React, { useEffect, useState } from "react";
import TestService from "../services/TestService";
import { Category } from "./Category/Category";
import RestaurantService from '../services/RestaurantService';

export const RestMenu = ({onAddItemClicked}) => {

    const [categoriesArray, setCategoriesArray] = useState([]);

    useEffect(()=>{

        // let categories = RestaurantService.instance.getCategories().map((category) => {
        //     return <div key={category.key}>
        //         <Category category={category} onAddItemClicked={onAddItemClicked} />
        //         <hr style={{margin: '12px'}} />
        //     </div>
        // })

        let categories = RestaurantService.instance.getCategories().map((category) => {
            return <div key={category._id}>
                <Category category={category} onAddItemClicked={onAddItemClicked} />
                <hr style={{margin: '12px'}} />
            </div>
        })

        setCategoriesArray(categories);
        
    }, [onAddItemClicked]);

    return(
        <div style={{margin: '3vh'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'space-between'}}>

                {
                    categoriesArray
                }

              {/* <Category />
              <hr style={{margin: '12px'}} />
              <Category /> */}


            </div>
        </div>
    );
}