import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { Header } from './header/Header';
import { Restaurant } from './Restaurant/Restaurant';
import { Order } from './Order/Order';
import { Invoice } from './Invoice/Invoice';
import { Calls } from './Calls/Calls';
import { Waiter } from './Waiter/Waiter';
import { Orders } from './Calls/Orders/Orders';
import { Login } from './Login/Login';
import { Register } from './Login/Register';
import { Home } from './Home/Home';
import { useEffect } from 'react';
import LoginService from './services/LoginService';
import { useState } from 'react/cjs/react.development';
import Spinner from './Spinner/Spinner';
import { getUserInfo } from './API/restAPI';
import { useHistory } from 'react-router-dom';
import { Entrance } from './Entrance/Entrance';
import { MyRestaurants } from './MyRestaurants/MyRestaurants';


function App() {

  const history = useHistory();

  const [showLoader, setShowLoader] = useState(true);


  useEffect(async () => {
    
    const response = await getUserInfo();
    console.log('getUserInfo',response);
    setShowLoader(false)
    if (response.status === 200) {
        LoginService.instance.setUser(response.data.data);
    } else if (response.status === 401 && (window.location.pathname !== '/login' && window.location.pathname !== '/register')) {
        // history.push(`/login`);
    } else if (response.status === 100) {
        LoginService.instance.setUser(response.data.data);
    } else {
        console.log('Unknown error');
    }
    
  }, []);

  return (
    <div >
      {showLoader
      ? <Entrance />
      : <BrowserRouter>
          <div>
            <div style={{position: 'sticky', top: '0px'}}>
              <Header /> 
            </div>
            
            <Route path="/" exact component={Restaurant} />
            <Route path="/restaurant/:restId/:restName" exact component={Restaurant} />
            <Route path="/order" exact component={Order} />
            <Route path="/invoice" exact component={Invoice} />
            <Route path="/waiter/:restId/:restName" exact component={Waiter} />
            <Route path="/calls/:restId/:restName" exact component={Calls} />
            <Route path="/orders/:restId/:restName" exact component={Orders} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/home" exact component={Home} />

            <Route path="/myRestaurants" exact component={MyRestaurants} />

            

          </div>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;


// cheaps // onion rings
// cakes
