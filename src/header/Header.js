import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { SideMenu } from '../SideMenu/SideMenu';
import { useHistory } from 'react-router-dom';
import { priceService } from '../services/priceService';
import  LoginService  from '../services/LoginService';
import OrderService from "../services/OrderService";
import { getUserInfo } from '../API/restAPI';
import './Header.css'

export const Header = () => { 

    const history = useHistory();
    const [showSideMenu, setShowSideMenu] = useState(false);
    const [itemsCount, setItemsCount] = useState(0);
    const [user, setUser] = useState(null);

    useEffect( async ()=>{
        setItemsCount(OrderService.instance.getItemsCount());
        priceService.getItemsCount().subscribe(items => {
            console.log('items count', items);
            setItemsCount(items);
        });

        if (!LoginService.instance.getUser()) {
            history.push(`/login`);
        } else {
            console.log('header user', user);
        }

        // const response = await getUserInfo();
        // console.log('getUserInfo',response);
        // if (response.status === 200) {
        //     LoginService.instance.setUSer(response.data.data);
        // } else if (response.status === 401 && (window.location.pathname !== '/login' && window.location.pathname !== '/register')) {
        //     history.push(`/login`);
        // } else if (response.status === 100) {
            
        // } else {
        //     console.log('Unknown error');
        // }

    }, []);

    const onMenuClicked = () => {
        console.log('onMenuClicked');
        setShowSideMenu(true);
    }

    const onMyOrderClicked = () => {
        console.log('onMyOrderClicked');
        history.push('/order');
    }

    const changeSideMenuModalDisplay = () => {
        console.log('changeAdditionsModalDisplay');
        setShowSideMenu(false);
    }

    const onLogoClicked = () => {
        console.log('onLogoClicked');
        history.push('/home');
    }
  
    return (
        <div style={{backgroundColor: '#2196f3', width:'100vw', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'white', height: '8vh'}}>
            <div style={{margin: '0px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

                <div
                    onClick={ () => onLogoClicked() }
                    style={{ height: '8vh', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 8px'}}>
                    <img className="header-logo-img" alt='' />
                </div>
          
                <Link
                    className="headerLink" 
                    to="/restaurant">Restaurant</Link>
                {/* <Link
                    className="headerLink" 
                    to="/order">Order</Link>
                <Link
                    className="headerLink" 
                    to="/invoice">Invoice</Link> */}
             
            </div>
            <div style={{ height: '8vh', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 12px'}}>
                    <div
                        onClick={()=>{onMyOrderClicked()}} 
                        style={{position: 'relative', display: 'flex'}}>
                        <img className="header-plate-img" alt='' />
                        <div style={{position: 'absolute', top: '0', left: '0',  borderRadius: '50%', width: '14px', 
                            height: '14px', backgroundColor: 'blue', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <p style={{color: 'white', fontSize: '12px'}}>{itemsCount}</p>
                        </div>
                    </div>
                    <img className="header-menu-img" alt='' onClick={() => {onMenuClicked()}} />
            </div>
            <div style={{display: showSideMenu ? 'block' : 'none'}}>
                {
                    showSideMenu ? 
                    <SideMenu showSideMenu={showSideMenu} changeSideMenuModalDisplay={changeSideMenuModalDisplay} />
                    : ''
            
                }
            </div>
        </div>
    );
    
}