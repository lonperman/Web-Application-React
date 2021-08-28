import useUser from "hooks/useUser"
import { useEffect, useState } from "react"
import useLocation from "wouter/use-location"
import './Login.css'


export default function Login({onLogin}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [, navigate] = useLocation()
    const { isLoginLoading, hasLoginError, login, isLogged } = useUser()

    useEffect(() => {
        if (isLogged) {
            navigate('/')
            onLogin && onLogin()
        }
    }, [isLogged, navigate, onLogin])

    const handleSubmit = (e) => {
        e.preventDefault()
        login({ username, password })
    }

    if (isLoginLoading) return

    return (
        <>
            {isLoginLoading && <strong>Checking credentials...</strong>}
            {!isLoginLoading &&
                <form className="form" onSubmit={handleSubmit}>
                    <label>
                        username
                        <input
                            placeholder='username'
                            onChange={e => setUsername(e.target.value)}
                            value={username}
                        />
                    </label>

                    <label>
                        password
                        <input
                            type='password'
                            onChange={e => setPassword(e.target.value)}
                            placeholder='password'
                        />
                    </label>
                    <button className='btn'>Login</button>
                </form>
            }
            {
                hasLoginError && <strong>Credentials are invalid</strong>
            }
        </>
    )
}