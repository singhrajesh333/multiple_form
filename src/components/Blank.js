import React from 'react'
import { Link } from 'react-router-dom'

const Blank = (props) => {
    const{username,email,password,password2,} = props.location.val
    return (
        <div>
        
        
            <h2>{username}</h2>
            <h2>{email}</h2>
            <h2>{password}</h2>
            <h2>{password2}</h2>
            <p>you have completed your reagistration <Link to = '/'>click here</Link> to sign in page</p>
        </div>
    )
}

export default Blank
