import React from 'react';
import "./base.scss";


interface NavbarProps {
    activeLinkKey?: string;
}

const Navbar: React.FC<NavbarProps> = props => {
    function getLinkClassName(linkKey: string): string {
        return (linkKey === props.activeLinkKey)? 'nav-link active' : 'nav-link';
    }

    const links = [
        <a key="home" className={getLinkClassName('home')} href="/">Home</a>,
        <a key="openings" className={getLinkClassName('openings')} href="/openings">Openings</a>,
        <a key="analysis" className={getLinkClassName('analysis')} href="/analysis">Analysis</a>,
        <a key="play" className={getLinkClassName('play')} href="/play">Play</a>,
        <a key="login" className={getLinkClassName('login')} href="/login">Login</a>
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


interface BaseProps {
    activeLinkKey?: string;
}

const Base: React.FC<BaseProps> = props => {
    return (
        <div>
            <Navbar activeLinkKey={props.activeLinkKey} />
            {props.children}
        </div>
    );
}


export default Base;
