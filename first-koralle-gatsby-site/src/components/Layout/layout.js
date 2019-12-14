import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './layout.css';


export default ({ children }) => (
    <div className="page-root">
        <Header />
        <div className="page-body">
            {children}
        </div>
        <Footer />
    </div>
)