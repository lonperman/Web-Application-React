import useUser from "hooks/useUser"
import { useEffect, useState } from "react"
import useLocation from "wouter/use-location"


export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [, navigate] = useLocation()
    const { isLoginLoading, hasLoginError, login, isLogged } = useUser()

    useEffect(() => {
        if (isLogged) navigate('/')
    }, [isLogged, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()
        login({ username, password })
    }

    if (isLoginLoading) return

    return (
        <>
            <h2>Login</h2>

            {isLoginLoading && <strong>Checking credentials...</strong>}
            {!isLoginLoading &&
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder='username'
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                    />
                    <input
                        type='password'
                        onChange={e => setPassword(e.target.value)}
                        placeholder='password'
                    />
                    <button>Login</button>
                </form>
            }
            {
                hasLoginError && <strong>Credentials are invalid</strong>
            }
        </>
    )
}