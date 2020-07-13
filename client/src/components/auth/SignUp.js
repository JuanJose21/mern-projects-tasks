import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

    // state to register
    const [user, saveUser] = useState({
        email: '',
        password: '',
        name: '',
        confirmPassword: ''
    });

    // get user
    const { email, password, name, confirmPassword } = user;

    const onChangeSignUp = (e) => {
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const submitSignUp = (e) => {
        e.preventDefault();

    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Sign Up</h1>

                <form onSubmit={submitSignUp}>
                    <div className="campo-form">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name"
                            value={name}
                            onChange={onChangeSignUp}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email"
                            value={email}
                            onChange={onChangeSignUp}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Your password"
                            value={password}
                            onChange={onChangeSignUp}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={onChangeSignUp}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Sign Up" />
                    </div>

                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Return Login
                </Link>
            </div>
        </div>
    );
}

export default SignUp;