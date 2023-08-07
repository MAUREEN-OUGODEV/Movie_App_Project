import React,{useState} from 'react';
import './style.css';

import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleInput = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = async () => {
    navigate(`/search/${encodeURIComponent(searchValue)}`);
  };

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="navbar-lg">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <h1 className="movie"><span className='logo'>Moo</span>vie</h1>
          <div className="d-flex">
            <input
              className="search"
              type="search"
              placeholder="Search"
              value={searchValue}
              onChange={handleInput}
            />
            <button className='btn btn-lg btn-warning' onClick={handleSearch}>Search</button>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" onClick={handleClick} href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/My list">My List</a>
              </li>
              <li className="nav-item">
              <button className="btn btn-lg btn-warning" type="button" onClick={() => navigate("/sign Up")}>
                  Sign Up
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
