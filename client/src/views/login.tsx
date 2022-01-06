import $ from 'jquery';
import jQuery from 'jquery';
import React, { useEffect } from "react";
import Base from "./base";
import './login.scss';


const LoginBase: React.FC = props => {
    useEffect(() => {
        jQuery(() => {

            // switch tabs (login/register)
            $('#tablist a').on('trigger', event => {
                event.preventDefault();
                $(event.target).show();
            });

            // on registration submit
            $('#register-form').on('submit', event => {
                event.preventDefault();
                let username = $('#register-username').val();
                let email = $('#register-email').val();
                let password = $('#register-password').val();
                if (username === undefined || email === undefined || password === undefined) {
                    alert('error');
                } else {
                    // @ts-ignore
                    doRegistration(username, email, password);
                }
            });

            // on login submit
            $('#login-form').on('submit', event => {
                event.preventDefault();
            });

        });
    });

    function doRegistration(username: string, email: string, password: string) {

    }

    function doLogin(username: string, password: string) {

    }

    return (
        <Base activeLinkKey="login">
            <div className="container login-base-div">

                <ul id="tablist" className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="nav-item">
                        <a className="nav-link active" href="#login" aria-controls="login" role="tab" data-bs-toggle="tab">
                            Login
                        </a>
                    </li>
                    <li role="presentation" className="nav-item">
                        <a className="nav-link" href="#register" aria-controls="register" role="tab" data-bs-toggle="tab">
                            Register
                        </a>
                    </li>
                </ul>

                <div className="tab-content my-4">
                    { props.children }
                </div>
            </div>
        </Base>
    );
}


/**
 * This component displays the page for the login form.
 * @returns The login form
 */
export const Login: React.FC = () => {
    return (
        <LoginBase>
            <div id="login" role="tabpanel" className="tab-pane fade show active">
                <form id="login-form" className="row g-3 needs-validation">
                    <div className="col-12">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="login-username" placeholder="..." required />
                            <label htmlFor="login-username">Username</label>
                        </div>
                        <div className="invalid-feedback">
                            Username is invalid
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <input type="password" className="form-control" id="login-password" placeholder="..." required />
                            <label htmlFor="login-password">Password</label>
                        </div>
                        <div className="invalid-feedback">
                            Password is invalid
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">Login</button>
                    </div>
                </form>
            </div>
            
            <div id="register" role="tabpanel" className="tab-pane fade show">
                <form id="register-form" className="row g-3 needs-validation">
                    <div className="col-12">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="register-username" placeholder="..." required />
                            <label htmlFor="register-username">Username</label>
                        </div>
                        <div className="invalid-feedback">
                            Username is invalid
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <input type="email" className="form-control" id="register-email" placeholder="..." required />
                            <label htmlFor="register-email">Email</label>
                        </div>
                        <div className="invalid-feedback">
                            Email is invalid
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <input type="password" className="form-control" id="register-password" placeholder="..." required />
                            <label htmlFor="register-password">Password</label>
                        </div>
                        <div className="invalid-feedback">
                            Password is invalid
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">Register</button>
                    </div>
                </form>
            </div>
        </LoginBase>
    );
}
