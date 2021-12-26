import React from 'react';
import PropTypes from 'prop-types';
import "./base.scss";


function Navbar(props) {
    function getLinkClassName(linkKey) {
        return (linkKey === props.activeLinkKey)? 'nav-link active' : 'nav-link';
    }

    const links = [
        <a key="home" className={getLinkClassName('home')} href="/">Home</a>,
        <a key="openings" className={getLinkClassName('openings')} href="/openings">Openings</a>,
        <a key="analysis" className={getLinkClassName('analysis')} href="/analysis">Analysis</a>,
        <a key="play" className={getLinkClassName('play')} href="/play">Play</a>,
        <a key="about" className={getLinkClassName('about')} href="/about">About</a>
    ];

    return (
        <nav id="navbar" className="navbar navbar-expand-sm  navbar-light bg-light">
            <div className="container-fluid">
                <div className="navbar-brand hstack gap-2">
                    <img alt="" src={process.env.PUBLIC_URL + '/logo512.png'} style={{width: '50px', height: '50px'}}/>
                    ChessLion
                </div>
                <div className="navbar-nav">
                    {links}
                </div>
            </div>
        </nav>
    );
}


function Base(props) {
    return (
        <div>
            <Navbar activeLinkKey={props.activeLinkKey} />
            {props.children}
        </div>
    );
}

Base.propTypes = {
    activeLinkKey: PropTypes.string,
}


export default Base;
