import React, { useState, useEffect } from 'react';

import { toast } from "react-toastify";

function Dashboard({setAuth}) {
    
    const [name, setName] = useState("")

    async function getName() {
        try {
            const response = await fetch("http://localhost:5000/dashboard/",{
                method: "GET",
                headers: { token: localStorage.token }
            })

            const parseRes = await response.json();

            setName(parseRes.user_name)

        } catch (err) {
            console.error(err.message)
        }
    }

    const logout = e => {
        e.preventDefault()
        localStorage.removeItem("token")
        setAuth(false);
        toast.success("Logged out succesfully!")
    }

    useEffect(() => {
        getName();
    },[])
    
    
    return (
        <>
            <h1>Dashboard {name}</h1>

            <button className="btn btn-primary" onClick={logout}>Logout</button>

        </>
    )
}

export default Dashboard
