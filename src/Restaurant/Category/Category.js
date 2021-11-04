import React, { useEffect, useRef, useState } from "react";
import { CategoryItem } from "./CategoryItem";
import '../restaurant.css'

export const Category = ({category, onAddItemClicked}) => {

    const [categoryItems, setCategoryItems] = useState([]);
    const categoryy = useRef(category);

    useEffect(()=>{
        
        let items = Object.values(categoryy.current.items).map((item) => {
            return <CategoryItem key={item.key} item={item} onAddItemClicked={onAddItemClicked} />
        })
        setCategoryItems(items);

    }, [onAddItemClicked]); 

    return(
        <div>
            <p style={{fontSize: '20px', color: '#707070', paddingBottom: '8px'}}>{category.name}</p>
            <div className="restaurant-category" style={{overflow: 'auto', whiteSpace: 'nowrap', alignItems: 'center', width: '94vw', scrollSnapType : 'x mandatory'}}>
                {
                    categoryItems
                }
            </div>
        </div>
    );
}