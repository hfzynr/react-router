import React from 'react'
import { Link } from "react-router-dom"

export default function Users() {
    const name = "Hafiz";
    return (
        <div>
            <p>
                <Link to={`/user/${name}`}>Ini adalah halaman user</Link> 
            </p>
        </div>
    )
}
