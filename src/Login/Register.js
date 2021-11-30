import React, {useState, useEffect} from "react";
import "./login.css";
import {  useHistory  } from 'react-router-dom';
import axios from "axios";


export const Register = ()=> {

    const history = useHistory();

    const [userName, setUserName] = useState('');
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
        console.log('onLoginClick', userName, userEmail, password);
        const params = {
            "name": userName,
            "email": userEmail,
            "password": password
        }
        const response = await axios.post('http://localhost:4000/api/auth/register', params)
        console.log(response);

        if (response.status === 201) {
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
                <label >Name</label>
                <input 
                    type="text" 
                    placeholder="Name" 
                    id="name" 
                    name="name"
                    onChange={(e) => {setUserName(e.target.value)}}/>
            </div>
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
             <a href="/login">Already have an account</a>
             <button id="btn" className="btn" onClick={()=> {onLoginClick()}}>Sign in</button>
           </div>
         </div>
        </div>
    )
}