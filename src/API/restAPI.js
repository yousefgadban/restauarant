import axios from 'axios'
const api = axios.create({
    baseURL: "http://localhost:4000/api",
    headers: {
        'Content-Type': 'application/json',
      },
});

export const getUsers = async ()=>{

    const token = localStorage.getItem('token');
    let headers = { headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : ''
    }}

    try {
        return await api.get('/auth/getUsers', headers); 
    } catch (err) {
        console.log(err);
        if (err.response.status === 403) {
            return await getToken();
        } else {
            return err.response; 
        }
    }
}

export const getSearch = async ()=>{

    const token = localStorage.getItem('token');
    let headers = { headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : ''
    }}

    try {
        return await api.get('/restaurant/getSearch', headers); 
    } catch (err) {
        console.log(err);
        if (err.response.status === 403) {
            return await getToken();
        } else {
            return err.response; 
        }
    }
}

export const getToken = async ()=>{
    console.log('getToken');

    const token = localStorage.getItem('refreshToken');
    let headers = { headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : ''
    }}

    try {
        let response =  await api.post('/auth/token', {}, headers );
        console.log(response);
        if (response.status === 200) {
            const token = response.data.data.accessToken;
            const refreshToken = response.data.data.refreshToken;

            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken); 

            return {status: 100};
        } else {
            // go to login
        }
    } catch (err) {
        console.log(err);
        return err.response;
    }
}