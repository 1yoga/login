import './App.css';
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import {Route} from "react-router-dom";

function App() {
    return (
        <div>
            <Route exact path="/">
                <Login/>
            </Route>
            <Route path="/profile">
                <Logout/>
            </Route>
        </div>
    );
}

export default App;
