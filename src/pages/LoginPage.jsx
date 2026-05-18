import { useState } from 'react'
import { useLoginMutation } from '../features/auth/authApi'
import { useDispatch, useSelector } from 'react-redux'
import { setCredentials } from '../features/auth/authSlice'
import { Navigate } from 'react-router-dom'

const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [login, { isLoading, error }] = useLoginMutation()

    const dispatch = useDispatch()

    const user = useSelector((state) => state.auth.user)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const userData = await login({
                username,
                password,
            }).unwrap()

            dispatch(setCredentials(userData))
        } catch (err) {
            console.error(err)
        }
    }

    if (user) {
        return <Navigate to="/profile" />
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">
                {isLoading ? 'Loading...' : 'Login'}
            </button>

            {error && <p>Ошибка авторизации</p>}
        </form>
    )
}

export default LoginPage