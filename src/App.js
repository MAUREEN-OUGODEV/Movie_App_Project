import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchMovies from './components/SearchMovies';
import Footer from './components/Footer';
import HomePage from './components/Hompage';




function App() {
  return (
    <div className='main'>
      <BrowserRouter>
      <Navbar />
     
        <div className="main">
         
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search/:query" element={<SearchMovies />} />
            {/* <Route path="/movie/:movieId" element={<MovieDetails />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
   
    <Footer />
    </div>
  );
}

export default App;
