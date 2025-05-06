import React from 'react'
import './Headar.css'
import { Link } from 'react-router-dom'
function Headar() {
    return (
        <div>
            <nav>
                <ul  >
               
                    <Link to ="/">Home</Link>
                    <Link to ="/about">About</Link>
                    <Link to ="/contact">Contact</Link>
                    <Link to ="/users">Users</Link>
                    <Link to="/posts">Posts</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Headar
