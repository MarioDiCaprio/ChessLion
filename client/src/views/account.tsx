import React from "react";
import { RootState } from '../redux/store';
import { useSelector } from "react-redux";
import { usePublicAccountDataQuery } from "../redux/providers/chesslionApi";
import Base from "./base";
import './account.scss';


interface AccountInfoRowProps {
    label: JSX.Element | string | null;
    value?: JSX.Element | string | null;
}

const AccountInfoRow: React.FC<AccountInfoRowProps> = (props) => {
    return (
        <div className="row">
            <div className="col-8">
                { props.label }
            </div>
            <div className="col-4">
                { (props.value === null || props.value === undefined)? 'Not Specified' : props.value }
            </div>
        </div>
    );
}


const Account: React.FC = () => {
    const loginInfo = useSelector((state: RootState) => state.loginCredentials);
    const publicInfo = usePublicAccountDataQuery(loginInfo.username);

    if (loginInfo.username === null) {
        return (
            <Base activeLinkKey="account">
                <div id="account-main" className="container">
                    Please log-in to view your account!
                </div>
            </Base>
        );
    } else if (publicInfo.isLoading) {
        return (
            <Base activeLinkKey="account">
                <div id="account-main" className="container">
                    <div className="spinner-grow text-primary"></div>
                </div>
            </Base>
        );
    } else if (publicInfo.error) {
        return (
            <Base activeLinkKey="account">
                <div id="account-main" className="container">
                    An unknown error occured...
                </div>
            </Base>
        );
    }

    return (
        <Base activeLinkKey="account">
            <div id="account-main" className="container">
                <div id="account-user-info">
                    <div className="d-flex">
                        <figure className="figure">
                            <img src="logo192.png" className="figure-img img-fluid rounded" alt="..."/>
                        </figure>
                        <span className="mx-4"></span>
                        <div>
                            <h1 id="account-username">{publicInfo.data?.username}</h1>
                            {publicInfo.data && publicInfo.data.realName}
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    );
}

export default Account;
