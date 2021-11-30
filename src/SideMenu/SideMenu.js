import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import './SideMenu.css'
import faker from 'faker'

export const SideMenu = ({changeSideMenuModalDisplay}) => {

    const history = useHistory();

    useEffect(()=>{

    }, []);

    const closeSideMenuModal = () => {
        changeSideMenuModalDisplay()
    }

    return(
        <div id="myModal" className="modal" style={{ }} onClick={()=>{ closeSideMenuModal()}}>
            <div
                onClick={(e)=>{ e.stopPropagation()}} 
                className="side-menu-modal-content" style={{padding: '0', margin: '0', boxSizing: 'border-box', borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px', backgroundColor: '#f7f7f7'}}>

                <div style={{backgroundColor: '#f7f7f7', padding: '8px', margin: '0', boxSizing: 'border-box', borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px'}}>
                    <span onClick={()=>{ closeSideMenuModal()}} className="close">&times;</span>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '8px 0'}}>
                        <img src={faker.image.avatar()} alt='' style={{width: '120px', height: '120px', borderRadius: '50%', backgroundColor: 'blue'}} />
                        <div style={{fontSize: '18px', color: '#2196f3', padding: '12px'}}>{faker.name.findName()}</div>
                    </div>
                    <hr />
                    
                    <p style={{color: '#707070', textDecoration: 'underLine', paddingTop: '10px'}}>Orders:</p>
                    <p style={{color: '#707070', padding: '10px'}}>My orders</p>
                    <p style={{color: '#707070', paddingLeft: '10px'}}>Saved orders</p>
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
                    <p onClick={()=>{history.push('/login'); closeSideMenuModal(); }} style={{color: '#707070', padding: '10px'}}>Logout</p>
                
                </div>
                
            </div>

        </div>
    );
}