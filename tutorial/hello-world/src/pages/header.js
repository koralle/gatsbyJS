import React from 'react';

const Header = (props) =>{
    return (
        <header className="app-header">
            {props.headerText}
        </header>
    );
}

export default Header;