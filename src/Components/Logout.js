import "./Logout.css"
import {useSelector} from "react-redux";

const Logout = () => {
    const logged = useSelector(state => state.logged)
    const login = useSelector(state => state.login)

    return (
        <div className="logout">
            {logged ? <h1>Welcome {login}</h1>: null}

        </div>
    )
}

export default Logout