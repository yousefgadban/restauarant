import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { Header } from './header/Header';
import { Restaurant } from './Restaurant/Restaurant';
import { Order } from './Order/Order';
import { Invoice } from './Invoice/Invoice';
import { Calls } from './Calls/Calls';
import { Waiter } from './Waiter/Waiter';
import { Orders } from './Calls/Orders/Orders';


function App() {
  return (
    <div >
      <BrowserRouter>
            <div>
                <div style={{position: 'sticky', top: '0px'}}>
                  <Header /> 
                </div>
                
                <Route path="/" exact component={Restaurant} />
                <Route path="/restaurant" exact component={Restaurant} />
                <Route path="/order" exact component={Order} />
                <Route path="/invoice" exact component={Invoice} />
                <Route path="/waiter" exact component={Waiter} />
                <Route path="/calls" exact component={Calls} />
                <Route path="/orders" exact component={Orders} /> 

                {/*
                 <Route path="/" exact component={Home} />
                  <Route path="/cars" exact component={Cars} />
                <Route path="/newCar" exact component={NewCar} />  */}
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;


// cheaps // onion rings
// cakes
