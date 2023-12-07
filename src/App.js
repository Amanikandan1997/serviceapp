import './App.css';
import PricingCard from './Components/ReactCardPlan';
import ReactPricingCard from './Components/ReactPricingCard';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
//import Chatdemo from "./Components/chat"
function App() {
  return (
   <>
      {/* <PricingCard /> */}
     
        {/* <Chatdemo/> */}
        <BrowserRouter>
    <Routes>
      <Route path='/' element={ <ReactPricingCard />}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
