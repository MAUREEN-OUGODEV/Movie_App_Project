import React,{useState} from 'react';
import './style.css';
import { searchMovies } from '../../utils/utilities';
import {useNavigate} from 'react-router-dom'




const Navbar = () => {
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const navigate=useNavigate()
    
    const handleInput = (event) => {
      setSearchValue(event.target.value);
    };
    const handleSearch = async () => {
      const results = await searchMovies(searchValue);
      setSearchResults(results.results);
      navigate (`/search/${encodeURIComponent(searchValue)}`)

    };
    const handleClick =() => {
        navigate('/');
    }
    return (
        <div className="navbar-lg">
<nav className="navbar navbar-expand-lg">
  <div class="container-fluid">
  <h1 className="movie">M<span className='logo'>oo</span>vie</h1>
    <div className="d-flex">
        <input className="search" type="search" placeholder="Search"
        value={searchValue}
        onChange={handleInput}
/>
        <button className='btn btn-lg btn-warning' onClick={handleSearch}>Search</button>
      </div>
    <div className="collapse navbar-collapse">
      <ul class="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " onClick ={handleClick} href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/My list">My List</a>
        </li>
        <li className="nav-item">
          <button className="warning"type="button ">
          <a className="nav-link active "  href="/sign Up" >Sign Up</a>
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    );
  };
  export default Navbar;



