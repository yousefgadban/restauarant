import React, {useState, useEffect} from "react";
import {  useHistory  } from 'react-router-dom';
import axios from "axios";
import "./login.css";
import { setUser } from '../Features/userSlice';
import { getUserInfo } from '../API/restAPI'
import { useDispatch } from "react-redux";
import LoginService from "../services/LoginService";

export const Login = () => {

    const dispatch = useDispatch();

    const history = useHistory();

    const [userId, setUserId] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');

    //const [user, setUser] = useState({});

    useEffect(()=>{

    });

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const onLoginClick = async () => {

        console.log('onLoginClick', userEmail, password);
        const params = {
            "email": userEmail,
            "password": password
        }
        const response1 = await axios.post('http://localhost:4000/api/auth/login', params)
        console.log(response1.data);

        if (response1.status === 200) {
            const token = response1.data.data.accessToken;
            const refreshToken = response1.data.data.refreshToken;
    
            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);

            const response = await getUserInfo();
            console.log('getUserInfo',response);
            
            if (response.status === 200) {
                LoginService.instance.setUser(response.data.data);
                dispatch(setUser(response.data.data));
                // socketListenToNotifications(response.data.data._id);
                
            } else if (response.status === 401 && (window.location.pathname !== '/login' && window.location.pathname !== '/register')) {
                // history.push(`/login`);
            } else if (response.status === 100) {
                LoginService.instance.setUser(response.data.data);
                dispatch(setUser(response.data.data));
                //socketListenToNotifications(response.data.data._id);
            } else {
                console.log('Unknown error');
            }
            
    
            history.push('/home');
        } else {
            console.log('toast', 'something wrong!');
        }

    }


    return(
    <div className="container">
        <div className="form">
         <div className="input-field">
              <label >Email</label>
              <input 
                type="text" 
                placeholder="E-mail" 
                id="email" 
                name="email"
                onChange={(e) => {setUserEmail(e.target.value)}}/>
        </div>
        <div className="input-field">
           <label >Password</label>
           <input 
                type="password" 
                placeholder="********" 
                id="password" 
                name="password"
                onChange={(e) => {setPassword(e.target.value)}}/>
       </div>
       <div className="input-field">
            <label >
                 <input type="checkbox" name="" id="remember"/>Remember me
           </label>
       </div>
       <div className="action">
             <a href="/register">Don't have an account yet?</a>
             <button id="btn" className="btn" onClick={()=> {onLoginClick()}}>Login</button>
           </div>
         </div>
        </div>
    )
}