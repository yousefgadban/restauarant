import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { Header } from './header/Header';
import { Home } from './Home/Home';
import { Restaurant } from './Restaurant/Restaurant';

function App() {
  return (
    <div >
      <BrowserRouter>
            <div>
                <div style={{position: 'sticky', top: '0px'}}>
                  <Header /> 
                </div>
                
                <Route path="/" exact component={Home} />
                <Route path="/restaurant" exact component={Restaurant} />
                {/* <Route path="/cars" exact component={Cars} />
                <Route path="/newCar" exact component={NewCar} />  */}
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
