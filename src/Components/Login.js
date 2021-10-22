import React, {useState} from "react";
import "./Login.css"
import {NavLink} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";

const Login = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const correctLogin = useSelector(state => state.login)
    const correctPassword = useSelector(state => state.password)
    const isDisabled = useSelector(state => state.logged)
    const dispatch = useDispatch()

    if(login === correctLogin && password === correctPassword) {
        dispatch({type: "CORRECT_LOGIN_AND_PASSWORD"})
    } else {
        dispatch({type: "NOT_CORRECT_LOGIN_AND_PASSWORD"})
    }
    return (
        <div className="login">
            <form className="login__form">
                <h1>LOGIN</h1>

                <input
                    type="login"
                    placeholder="Login"
                    value={login}
                    onChange={(e) => {
                        setLogin(e.target.value)
                    }}/>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}/>
                <NavLink to="/profile">
                    <button disabled={!isDisabled} type="submit">Submit</button>
                </NavLink>
            </form>
        </div>
    )
}

export default Login