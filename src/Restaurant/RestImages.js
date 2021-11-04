import React, { useEffect, useState } from "react";
import unsplashAPI from "../API/unsplashAPI";
import './restaurant.css'

export const RestImages = () => {

    const [restImages, setRestImages] = useState([]);

    useEffect(()=>{

        getImages();
        
    }, []);

    const getImages = async () => {
        const response = await unsplashAPI.get('/search/photos', {
            params: { query: 'restaurant' }
          });
          console.log(response.data);
          setRestImages(response.data.results.slice(0,6));
    }

    return(
        <div className="rest-images-grid" >
            {
                restImages.map((img)=>{
                    return <div key={img.id} className="rest-image" style={{background: `url(${img.urls.regular}) no-repeat center center`}}>
                        {/* <img className="restaurant-image" alt="" src={img.urls.regular} style={{height: '100%', width: '100%'}} /> */}
                    </div>
                })
            }
        </div>
    );
}

// style={{display: 'grid', height: '400px', gridTemplateColumns: 'repeat(3, auto)'}}
// style={{border: '1px solid black', height: '200px', background: `url(${img.urls.regular}) no-repeat center center`}}