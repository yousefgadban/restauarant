import React, { useEffect, useState } from "react";
import TestService from "../services/TestService";
import { Category } from "./Category/Category";

export const RestMenu = () => {

    const [categoriesArray, setCategoriesArray] = useState([]);

    useEffect(()=>{

        let categories = TestService.instance.getCategories().map((category) => {
            return <div key={category.id}>
                <Category category={category} />
                <hr style={{margin: '12px'}} />
            </div>
        })

        setCategoriesArray(categories);
        
    }, []);

    return(
        <div style={{margin: '3vh', border: '1px solid #2196f3',  borderRadius: '12px'}}>
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