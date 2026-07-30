import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
const navigate = useNavigate();

    function handleLogin() {
    
        
        if (!username) {
            alert("Username is required");
            return;
        }
        if (!password) {
            alert("Password is required");
            return;
        }

        if (username === "admin" && password === "admin123") {
            navigate("/aircraftlist");
        }
        else {
            alert("Invalid username or password.")
        }
    }

    return (
        <>
            <h1>Login Page</h1>
            <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <br/>
            <br/>
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <br/>
            <br/>
            <button onClick={handleLogin}>Login</button>
        </>
    );
}

export default Login