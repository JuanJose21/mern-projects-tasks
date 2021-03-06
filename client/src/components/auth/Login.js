import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    // state to login
    const [user, saveUser] = useState({
        email: '',
        password: ''
    });

    // get user
    const { email, password } = user;

    const onChangeLogin = (e) => {
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const submitLogin = (e) => {
        e.preventDefault();

    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Login</h1>

                <form onSubmit={submitLogin}>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email"
                            value={email}
                            onChange={onChangeLogin}
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
                            onChange={onChangeLogin}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Login" />
                    </div>

                </form>

                <Link to={'/sign-up'} className="enlace-cuenta">
                    Sign up
                </Link>
            </div>
        </div>
    );
}

export default Login;