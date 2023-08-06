import React from 'react';
import Display from '../Display'; // Replace with the actual path to Display component
import GetMovies from '../GetMovies'; // Replace with the actual path to GetMovies component
import GetCategories from '../GetCategories';
function HomePage() {
  return (
    <div>
     
      <Display /> 
      <GetCategories />
      <GetMovies /> 
    </div>
  );
}

export default HomePage;
