import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../App'
import Homepage from './Homepage'


function DirectPage() {
    const { state, dispatch } = useContext(AuthContext)
    if (!state.isAuthenticated) {
        return <Redirect to="/login" />
    }

    if (state.role === 3) {
        return <Redirect to='/admin' />
    }

    return (
        <Homepage />
    )
}

export default DirectPage
