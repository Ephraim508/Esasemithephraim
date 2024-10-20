import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Plants from './Plants/Plants';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './App.css';
import ThankYou from './ThankYou/ThankYou';
import AddToCart from './Add-to-cart/AddToCart';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Header /><Plants /><Footer/></>} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/add-to-cart" element={<AddToCart />} />
        </Routes>
       
      </div>
    </Router>
   
  );
}

export default App;

