import React from 'react';
import './header.css';

const Header = () => { 
    return ( 
    <header className="header"> 
     
    <nav> 
    <ul className="nav-list"> 
    <div class="search-container"> 
        <form action="/search" method="get"> 
            <input type="text" placeholder="Digite sua pesquisa..." name="search" class="search-input"></input>
            <button type="submit" class="search-button">
                <img src='#' alt='search' className='search'></img>
            </button> 
        </form>
    </div>
        <li><a href="#home">Home</a></li> 
        <li><a href="#about">Sobre</a></li> 
        <li><a href="#contact">Contato</a></li> 
        </ul> 
        </nav> 
        </header> 
        ); 
    } 
        export default Header;