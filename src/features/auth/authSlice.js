import { createSlice } from '@reduxjs/toolkit'

const savedUser = localStorage.getItem('user')

const initialState = {
    user: savedUser ? JSON.parse(savedUser) : null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.user = action.payload
            localStorage.setItem('user', JSON.stringify(action.payload))
        },

        logout: (state) => {
            state.user = null
            localStorage.removeItem('user')
        },
    },
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer