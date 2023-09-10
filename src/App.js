import React from 'react';
import Header from './Header';
import Hero from './Hero';
import './App.css';
import PopularProducts from './PopularProducts';
import Superquality from './Superquality';
import Services from './Services';
import Specialoffer from './Specialoffer';
import Feedback from './Feedback';
import Signup from './Signup';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Header /> 
      <Hero />
      <PopularProducts />
      <Superquality />
      <Services />
      <Specialoffer />
      <Feedback />
      <Signup />
      <Footer />
      
      {/* Other content */}
    </div>
  );
}

export default App;
