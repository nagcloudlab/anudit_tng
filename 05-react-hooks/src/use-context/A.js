
import React, { useState } from 'react'
import B from './B'
import LoggedUserContext from './LoggedUserContext'
import ThemeContext from './ThemeContext'
export default function A() {

    const [loggedUser, setLoggedUser] = useState('John Doe')
    const [theme, setTheme] = useState('dark')

    return (
        <div className='card card-body'>
            A <br />
            {/* {loggedUser} <br />
            {theme} <br /> */}

            <ThemeContext.Provider value={theme}>
                <LoggedUserContext.Provider value={loggedUser}>
                    <B />
                </LoggedUserContext.Provider>
            </ThemeContext.Provider>
            <br />

            <ThemeContext.Provider value={"anudit theme"}>
                <LoggedUserContext.Provider value={loggedUser}>
                    <B />
                </LoggedUserContext.Provider>
            </ThemeContext.Provider>

        </div>
    )
}
