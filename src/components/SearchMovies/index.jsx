import React, {useState,useEffect} from 'react';
import "./style.css";
import { searchMovies} from '../../utils/utilities';
import { useParams } from 'react-router-dom';
import ImageContainer from '../../atoms/ImageContainer';


const SearchMovies=()=>{
    const {query}=useParams();
    const [searchResults, setSearchResults] = useState([]);

    useEffect(()=>{
      const searchResults=async()=>{
        const results=  await searchMovies(query);
        setSearchResults(results.results);
    };
    searchResults();

},[query]);
   return(
        <div>
          <h2 className='heading'> {query}</h2>
          <div className="moviecate">
            {searchResults.map((movie) => (
              <ImageContainer key={movie.id} props={movie}  className="container"/>
            ))}
          </div>
        </div>  
   )
}
export default SearchMovies;
