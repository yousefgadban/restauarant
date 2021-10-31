import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'

export const Header = () => { 

 
  
    return (
        <div style={{backgroundColor: '#2196f3', width:'100vw', display: 'flex', alignItems: 'center', color: 'white', height: '8vh'}}>
            <div style={{margin: '0px 0px', display: 'flex'}}>

                <Link 
                    className="headerLink" 
                    to="/" >Home</Link>
                <Link
                    className="headerLink" 
                    to="/restaurant">Restaurant</Link>
                <Link
                    className="headerLink" 
                    to="/order">Order</Link>
                <Link
                    className="headerLink" 
                    to="/invoice">Invoice</Link>
             
            </div>
        </div>
    );
    
}