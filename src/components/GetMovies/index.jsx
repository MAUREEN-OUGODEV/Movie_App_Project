import React,{useEffect,useState} from 'react';
import {getMovies} from '../../utils/utilities';
import ImageContainer from '../../atoms/ImageContainer';
import'./style.css';


const GetMovies = ()=>{
    const[movies,setMovies]=useState([])
    const [loading,setLoading]=useState(false)


    useEffect(()=>{
        (async()=>{
            setLoading(true);
            const movies=await getMovies();
            setLoading(false);
            setMovies(movies.results);
          

        })();
    },[]);




if(loading) {
    return <h1>Loading...</h1>
}
return(
    <div className='movies'>
        {movies 
        &&!loading &&
         movies.length>0 && 
         movies.map(item =>(
            <ImageContainer key={item.id} props={item}/>
        ))}

        {movies &&!loading && movies.length ===0 && (<h1>No movies found</h1>)}
    </div>
)
}
export default GetMovies;