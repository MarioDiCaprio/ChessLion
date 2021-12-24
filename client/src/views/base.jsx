import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function Navbar(props) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-brand">
                    ChessLion
                </div>
            </div>
        </nav>
    );
}


function Base(props) {
    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    );
}


export default Base;
