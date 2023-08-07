// import React,{useEffect,useState} from 'react';
// import {getMovies} from '../../utils/utilities';
// import ImageContainer from '../../atoms/ImageContainer';
// import'./style.css';


// const GetMovies = ()=>{
//     const[movies,setMovies]=useState([])
//     const [loading,setLoading]=useState(false)


//     useEffect(()=>{
//         (async()=>{
//             setLoading(true);
//             const movies=await getMovies();
//             setLoading(false);
//             setMovies(movies.results);
          

//         })();
//     },[]);




// if(loading) {
//     return <h1>Loading...</h1>
// }
// return(
//     <div className='movies'>
//         {movies 
//         &&!loading &&
//          movies.length>0 && 
//          movies.map(item =>(
//             <ImageContainer key={item.id} props={item}/>
//         ))}

//         {movies &&!loading && movies.length ===0 && (<h1>No movies found</h1>)}
//     </div>
// )
// }
// export default GetMovies;
import React, { useEffect, useState } from 'react';
import { getMovies } from '../../utils/utilities';
import ImageContainer from '../../atoms/ImageContainer';
import CategoriesComponent from '../GetCategories';
import './style.css';

const GetMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCategoryName, setSelectedCategoryName] = useState("All");


     useEffect(()=>{
        (async()=>{
            setLoading(true);
            const movies=await getMovies();
            setLoading(false);
            setMovies(movies.results);
          

        })();
    },[]);

  const handleCategoryChange = (categoryId, categoryName) => {
    setSelectedCategory(categoryId);
    setSelectedCategoryName(categoryName);
  };

  const filteredMovies =
    selectedCategory === "all"
      ? movies
      : movies.filter(movie => movie.genre_ids.includes(parseInt(selectedCategory)));

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <CategoriesComponent
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
      {selectedCategoryName !== "All" && <h1>{selectedCategoryName} Movies</h1>}
      <div className='movies'>
        {filteredMovies.length > 0 ? (
          filteredMovies.map(item => (
            <ImageContainer key={item.id} props={item} />
          ))
        ) : (
          <h1>No movies found</h1>
        )}
      </div>
    </div>
  );
};

export default GetMovies;
