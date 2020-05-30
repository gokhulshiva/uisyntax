import React from 'react';
import './App.css';
import Header from './components/header';
import SiteInfo from './components/main';
import Footer from './components/footer';
import './css/main.css';





function App() {
    return ( 
        <div className="content">
          <Header />
          <SiteInfo />
          <Footer />
        </div>
    );
}

export default App;


