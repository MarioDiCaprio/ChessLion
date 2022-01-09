import $ from 'jquery';
import jQuery from 'jquery';
import React, { useEffect } from "react";
import Base from "./base";
import { SERVER_ADDRESS } from '../settings';
import { formValidation } from '../utils/html/formUtils';
import './login.scss';


// This class is used as a wrapper and contains the main functionality
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
                formValidation({
                    applyBootstrap: true,
                    formInput: {
                        'username': $('#register-username'),
                        'email': $('#register-email'),
                        'password': $('#register-password'),
                        'passwordC': $('#register-password-confirm')
                    },
                    validation: {
                        'username': args => {
                            let username = args['username'].val();
                            if (typeof username === 'string') {
                                return true;
                            } else {
                                $('#register-username-feedback').html('Username cannot be empty');
                                return false;
                            }
                        },
                        'email': args => {
                            let email = args['email'].val();
                            if (typeof email === 'string') {
                                return true;
                            } else {
                                $('#register-email-feedback').html('Email cannot be empty');
                                return false;
                            }
                        },
                        'password': args => {
                            let password = args['password'].val();
                            if (typeof password === 'string') {
                                if (password.length >= 8) {
                                    return true;
                                } else {
                                    $('#register-password-feedback').html('Password must be at least 8 characters long');
                                    return false;
                                }
                            } else {
                                $('#register-password-feedback').html('Password cannot be empty');
                                return false;
                            }
                        },
                        'passwordC': args => args['password'].val() === args['passwordC'].val()
                    },
                    onValid: args => {
                        let username = args['username'].val();
                        let email = args['email'].val();
                        let password = args['password'].val();
                        $.ajax({
                            url: SERVER_ADDRESS + '/registration',
                            data: {
                                'username': username,
                                'email': email,
                                'password': password
                            },
                            dataType: 'json',
                            success: response => {
                                if (response.valid) {
                                    alert('Registration Successful');
                                }
                                else {
                                    $('#register-username-feedback').html('Username already exists');
                                    args['username'].removeClass('is-valid');
                                    args['username'].addClass('is-invalid');
                                }
                            },
                            error: () => {
                                alert('An unknown error occurred, the server might be down temporarily');
                            }
                        });
                    }
                });
            });

            // on login submit
            $('#login-form').on('submit', event => {
                event.preventDefault();
                formValidation({
                    applyBootstrap: true,
                    formInput: {
                        'username': $('#login-username'),
                        'password': $('#login-password'),
                    },
                    validation: {
                        'username': args => {
                            let username = args['username'].val();
                            return typeof username === 'string';
                        },
                        'password': args => {
                            let password = args['password'].val();
                            if (typeof password === 'string') {
                                return true;
                            } else {
                                $('#login-password-feedback').html('Passwrod may not be empty');
                                return false;
                            }
                        }
                    },
                    onValid: args => {
                        let username = args['username'].val();
                        let password = args['password'].val();
                        $.ajax({
                            url: SERVER_ADDRESS + '/login',
                            data: {
                                'username': username,
                                'password': password
                            },
                            dataType: 'json',
                            success: response => {
                                if (response.valid) {
                                    alert('Login Successful');
                                }
                                else {
                                    args['username'].removeClass('is-valid');
                                    args['username'].addClass('is-invalid');
                                    args['password'].removeClass('is-valid');
                                    args['password'].addClass('is-invalid');
                                    $('#login-password-feedback').html('Username or Password invalid');
                                }
                            },
                            error: () => {
                                alert('An unknown error occured, the server might be down temporarily ');
                            }
                        });
                    }
                });
            });

        });
    });


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
                <form id="login-form" className="row g-3 needs-validation" method='get'>
                    <div className="col-12">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="login-username" placeholder="..." required />
                            <label htmlFor="login-username">Username</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <input type="password" className="form-control" id="login-password" placeholder="..." required />
                            <label htmlFor="login-password">Password</label>
                            <div id="login-password-feedback" className="invalid-feedback">
                                Password is invalid
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">Login</button>
                    </div>
                </form>
            </div>
            
            <div id="register" role="tabpanel" className="tab-pane fade show">
                <form id="register-form" className="row g-3 needs-validation" method='get'>
                    <div className="col-12">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="register-username" placeholder="..." required />
                            <label htmlFor="register-username">Username</label>
                            <div id="register-username-feedback" className="invalid-feedback show">
                                Username is invalid
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <input type="email" className="form-control" id="register-email" placeholder="..." required />
                            <label htmlFor="register-email">Email</label>
                            <div id="register-email-feedback" className="invalid-feedback">
                                Email is invalid
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <input type="password" className="form-control" id="register-password" placeholder="..." required />
                            <label htmlFor="register-password">Password</label>
                            <div id="register-password-feedback" className="invalid-feedback">
                                Password is invalid
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <input type="password" className="form-control" id="register-password-confirm" placeholder="..." required />
                            <label htmlFor="register-password-confirm">Confirm Password</label>
                            <div id="register-passwordC-feedback" className="invalid-feedback">
                                Passwords do not match
                            </div>
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
