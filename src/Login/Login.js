import React, {useState, useEffect} from "react";
import {  useHistory  } from 'react-router-dom';
import axios from "axios";
import "./login.css";

export const Login = () => {

    const history = useHistory();

    const [userId, setUserId] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');

    const [user, setUser] = useState({});

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
        const response = await axios.post('http://localhost:4000/api/auth/login', params)
        console.log(response.data);

        if (response.status === 200) {
            const token = response.data.data.accessToken;
            const refreshToken = response.data.data.refreshToken;
    
            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);
    
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