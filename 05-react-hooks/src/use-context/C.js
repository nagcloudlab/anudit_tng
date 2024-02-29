
import React, { useContext } from 'react'
import LoggedUserContext from './LoggedUserContext'
import ThemeContext from './ThemeContext'

export default function C() {
    const loggedUser = useContext(LoggedUserContext)
    const theme = useContext(ThemeContext)
    return (
        <div className='card card-body'>
            C
            <div>
                {loggedUser} <br />
                {theme} <br />
            </div>
        </div>
    )
}
