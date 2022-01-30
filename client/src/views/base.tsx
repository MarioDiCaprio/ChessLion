import React from 'react';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './base.scss';


interface NavbarProps {
    activeLinkKey?: string;
}

const Navbar: React.FC<NavbarProps> = props => {
    const loginInfo = useSelector((state: RootState) => state.loginCredentials)

    function getLinkClassName(linkKey: string): string {
        return (linkKey === props.activeLinkKey)? 'nav-link active' : 'nav-link';
    }

    const links = (
        <div className="d-flex gap-2">
            <Link to="/" className={getLinkClassName('home')}>Home</Link>
            <Link to="/openings" className={getLinkClassName('openings')}>Openings</Link>
            <Link to="/analysis" className={getLinkClassName('analysis')}>Analysis</Link>
            <Link to="/play" className={getLinkClassName('play')}>Play</Link>
        </div>
    );

    let accountLink =   (loginInfo.username === null || loginInfo.username === undefined)?
                        <Link to="/login" className={getLinkClassName('login')}>Login</Link>
                        :
                        <Link to="/account" className={getLinkClassName('account')}>Account</Link>

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
                <div className="navbar-nav">
                    {accountLink}
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
