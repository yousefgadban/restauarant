import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import './SideMenu.css'
import { setUser } from '../Features/userSlice';

export const SideMenu = ({changeSideMenuModalDisplay}) => {

    const history = useHistory();

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.value);

    useEffect(()=>{

    }, []);

    const closeSideMenuModal = () => {
        changeSideMenuModalDisplay()
    }

    return(
        <div id="myModal" className="side-menu-modal" style={{ }} onClick={()=>{ closeSideMenuModal()}}>
            <div
                onClick={(e)=>{ e.stopPropagation()}} 
                className="side-menu-modal-content" style={{padding: '0', margin: '0', boxSizing: 'border-box', borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px', backgroundColor: '#f7f7f7'}}>

                <div style={{backgroundColor: '#f7f7f7', padding: '8px', margin: '0', boxSizing: 'border-box', borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px'}}>
                    <span onClick={()=>{ closeSideMenuModal()}} className="close">&times;</span>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '8px 0'}}>
                        <img className="sideMenuLogoImg"  alt='' style={{width: '120px', height: '120px', borderRadius: '50%', backgroundColor: '#ffffff', border: '1px solid #c8c8c8'}} />
                        <div style={{fontSize: '18px', color: '#2196f3', padding: '12px'}}>{user ? user.name : 'App Name'}</div>
                    </div>
                    <hr />
                    
                    <p style={{color: '#707070', textDecoration: 'underLine', paddingTop: '10px'}}>Orders:</p>
                    <p onClick={()=>{history.push('/myOrders'); closeSideMenuModal(); }} style={{color: '#707070', padding: '10px'}}>My orders</p>
                    <hr style={{ margin: '10px'}}/>
                    <p onClick={()=>{history.push('/myRestaurants'); closeSideMenuModal(); }} style={{color: '#707070', paddingLeft: '10px'}}>My restaurants</p>
                    <hr style={{ margin: '10px'}}/>
                    <p onClick={()=>{history.push('/delivery'); closeSideMenuModal(); }} style={{color: '#707070', paddingLeft: '10px'}}>Delivery</p>
                    <hr style={{ margin: '10px'}}/>
                    <p style={{color: '#707070', textDecoration: 'underLine', paddingTop: '10px'}}>Settings:</p>
                    <p style={{color: '#707070', padding: '10px'}}>Language</p>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0px 0'}} >
                        <p style={{color: '#707070', paddingLeft: '10px'}}>Notifications</p>
                        <label className="switch">
                            <input type="checkbox"  />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <hr style={{ margin: '10px'}}/>
                    <p style={{color: '#707070', textDecoration: 'underLine', paddingTop: '10px'}}>General:</p>
                    <p onClick={()=>{history.push('/waiter'); closeSideMenuModal(); }} style={{color: '#707070', padding: '10px'}}>Privacy Policy</p>
                    <p style={{color: '#707070', padding: '10px'}}>Terms of use</p>
                    <p style={{color: '#707070', padding: '10px'}}>Contact Us</p>
                    <hr style={{ margin: '10px'}}/>
                    <p onClick={()=>{dispatch(setUser(null));  history.push('/login'); closeSideMenuModal(); }} style={{color: '#707070', padding: '10px'}}>Logout</p>
                
                </div>
                
            </div>

        </div>
    );
}