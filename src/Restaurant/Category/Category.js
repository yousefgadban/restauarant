import React, { useEffect, useState } from "react";
import { CategoryItem } from "./CategoryItem";
import '../restaurant.css'

export const Category = ({category}) => {

    const [categoryItems, setCategoryItems] = useState([]);

    useEffect(()=>{

        console.log('category', category);
        
        let items = category.items.map((item) => {
            return <CategoryItem key={item.id} item={item} />
        })
        setCategoryItems(items);

    }, []);

    return(
        <div>
            <p style={{fontSize: '20px', color: '#707070'}}>{category.name}</p>
            <div className="restaurant-category" style={{overflow: 'auto', whiteSpace: 'nowrap', alignItems: 'center', width: '94vw'}}>
                {
                    categoryItems
                }
            </div>
        </div>
    );
}