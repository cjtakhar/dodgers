import { useState } from 'react';
import './login.css'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch('https://mlb-core-api.wl.r.appspot.com/api/auth/login', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' }
            })
            const data = await res.json()
            if (data.error) {
                setError(data.error)
            } else {
                localStorage.setItem('token', 'my_token')
                window.location.href = '/dodgers'
            }
        } catch(err) {
            setError(err.message)
        }
    }
    return (
        <div className="login-container">
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <h2 className="form-title">Enter</h2>
                    <div className="input-container">
                    <input className="form-input" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    <input className="form-input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="btn-container">
                    <button className="btn-login"type="submit">Login</button>
                    <button className="btn-register" type="button">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;