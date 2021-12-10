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
import { useEffect, useRef } from 'react';
import LoginService from './services/LoginService';
import { useState } from 'react/cjs/react.development';
import Spinner from './Spinner/Spinner';
import { getUserInfo } from './API/restAPI';
import { useHistory } from 'react-router-dom';
import { Entrance } from './Entrance/Entrance';
import { MyRestaurants } from './MyRestaurants/MyRestaurants';
import { OrderDetails } from './OrderDetails/OrderDetails';

import socketIOClient from "socket.io-client";
import { Notifications } from './Notifications/Notifications';
import { Delivery } from './Delivery/Delivery';
import { MyOrders } from './MyOrders/MyOrders';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './Features/userSlice';

const ENDPOINT = "http://127.0.0.1:4000";

function App() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user.value);

  const history = useHistory();

  const [showLoader, setShowLoader] = useState(true);
  const [showNotificationsModal, setShowNotificationsModal] = useState(false);
  
  const currentNotification = useRef(null);


  useEffect(async () => {

    console.log('App', user);
    
    const response = await getUserInfo();
    console.log('getUserInfo',response);
    setShowLoader(false)
    if (response.status === 200) {
        LoginService.instance.setUser(response.data.data);
         dispatch(setUser(response.data.data));
        socketListenToNotifications(response.data.data._id);
        
    } else if (response.status === 401 && (window.location.pathname !== '/login' && window.location.pathname !== '/register')) {
        // history.push(`/login`);
    } else if (response.status === 100) {
        LoginService.instance.setUser(response.data.data);
        socketListenToNotifications(response.data.data._id);
    } else {
        console.log('Unknown error');
    }
    
  }, []);


  const socketListenToNotifications = (userId) => {
        
      const socket = socketIOClient(ENDPOINT);
      socket.on("connect", () => {
          console.log(`App You connected with id: ${socket.id} - ${userId}`);
          socket.emit('joinNotifications', {userId})

          socket.on(`${userId}`, (Notification)=> {
              console.log('new Notification', Notification, typeof Notification.step);
              currentNotification.current = Notification;
              setShowNotificationsModal(true);
          })
      });
  }

  const changeNotificationsModalDisplay = () => {
    setShowNotificationsModal(false);
  }

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
            <Route path="/delivery" exact component={Delivery} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/home" exact component={Home} />
            <Route path="/myOrders" exact component={MyOrders} />

            <Route path="/orderDetails/:restId/:orderId" exact component={OrderDetails} />

            <Route path="/myRestaurants" exact component={MyRestaurants} />

          </div>

          <div style={{display: showNotificationsModal ? 'block' : 'none'}}>
                {
                    showNotificationsModal ?  
                    <Notifications changeNotificationsModalDisplay={changeNotificationsModalDisplay} kind={currentNotification.current.delivery} step={currentNotification.current.step} />  : ''
                }
          </div>

        </BrowserRouter>
      }
    </div>
  );
}

export default App;


// cheaps // onion rings
// cakes
