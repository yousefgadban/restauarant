import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import {  useHistory  } from 'react-router-dom';
import TestService from '../services/TestService'

import {getSearch} from '../API/restAPI'

export const Home = () => {

    const history = useHistory();

    const [search, setSearch] = useState('');
    const [showLoader, setShowLoader] = useState(false);
    const [allSearchList, setAllSearchList] = useState([]);
    const [searchList, setSearchList] = useState([]);


    useEffect(async() => {
        TestService.instance.helloWorld();

        const response = await getSearch();
        console.log(response);
        setAllSearchList(response.data.data);

    }, []);

    useEffect(() => {
        console.log('search changed ', search);

        if (search.trim() !== '') {
            const searchList = allSearchList.filter((item) => {
                if (item.name.includes(search)) {
                    return item;
                }
                
            });
            console.log('searchList', searchList); 
            setSearchList(searchList);
        } else {
            setSearchList([]);
        }

    }, [search]);

    const onSearchClicked = () => {
        console.log('onSearchClicked', search);
       
    }

    const onSearchItemClicked = (searchItem) => {
        console.log('onSearchItemClicked', searchItem);
        history.push(`/restaurant/${searchItem._id}/${searchItem.name}`);
    }

    return(
        <div >
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100vw', height: '92vh'}}>
                <div className="search-input-field" style={{width: '70vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <input
                        className="search-input"
                        style={{width: '60vw', height: '40px', borderTopLeftRadius: '6px', borderBottomLeftRadius: '6px', padding: '0 12px'}}
                        type="text" 
                        placeholder="Search..." 
                        id="search" 
                        name="search"
                        onChange={(e) => {setSearch(e.target.value)}}/>

                    <div style={{width: '10vw', height: '40px',  display: 'flex', backgroundColor: 'blueviolet', alignItems: 'center', justifyContent: 'center', borderTopRightRadius: '6px', borderBottomRightRadius: '6px'}}>
                        <img
                            onClick={() => {onSearchClicked();}} 
                            className="open-service-img" alt="" width='28px' height='28px' />
                    </div>

                </div>

                <div style={{width: '70vw', height: '120px', display: 'flex', flexDirection: 'column'}}>
                    {
                        searchList.map((searchItem, index) => {
                            return <div key={searchItem._id} style={{width: '100%', height: '40px', display: 'flex', alignItems: 'center', padding: '0 12px',
                                        border: '1px solid #eee',
                                        borderBottomRightRadius: (index === searchList.length - 1) ? '5px' : '0px',
                                        borderBottomLeftRadius: (index === searchList.length - 1) ? '5px' : '0px' }}
                                        onClick={() => {onSearchItemClicked(searchItem)}}>
                                {searchItem.name}
                            </div>
                        })
                    }
                </div>

                <div style={{width: '60vw', height: '40vh',  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <img
                        onClick={() => {}} 
                        className="search-logo-img" alt="" width='200px' height='200px' /> 
                     <h3 style={{color: '#2196f3', fontSize: '22px'}}>App Name</h3>
                </div>

            </div>
        </div>
    );
}