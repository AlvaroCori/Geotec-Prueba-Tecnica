import React from 'react';
import logo from './logo.svg';


import Navbar from './Navbar';
import AppRouter from './AppRouter';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
        <Navbar />
        <AppRouter />
        <Footer />
    </div>
    
  );
}

export default App;


