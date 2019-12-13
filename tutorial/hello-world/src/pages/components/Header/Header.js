import React from 'react';
import './Header.css';

const Header = (props) => {
    return(
        <header className="App-header">
            <h1>{props.headerText}</h1>
        </header>
    );
}
export default Header;