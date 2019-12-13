import React from "react"
import { Link } from "gatsby";
import Header from './header';

const App = () => {
    return (
        <div className="app-root">
            <Header headerText ="Hello, Gatsby!" />
            <Link to="/contact/">Contact</Link>
            <h1>Hello, world!</h1>
        </div>
    );
}

export default App;