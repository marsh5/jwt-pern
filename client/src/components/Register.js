import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Register({ setAuth }) {

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        name: ""
    })

    const {email, password, name} = inputs;

    const onChange = e => {
        setInputs({...inputs, [e.target.name] : e.target.value });
    }

    const onSubmitForm = async (e) => {
        e.preventDefault()
        try {
            const body = { email, password, name}

           const response = await fetch("http://localhost:5000/auth/register", {
               method: "POST",
               headers: { "Content-Type": "application/json"},
               body: JSON.stringify(body)
           });

           const parseRes = await response.json();

           if(parseRes.token){
                localStorage.setItem("token", parseRes.token)
                setAuth(true);
                toast.success("Registered Succesfully")
           } else{
               setAuth(false);
               toast.error(parseRes);
           }

           
        } catch (err) {
            console.error(err)
        }
    }


    return (
        <>
            <h1 className="text-center my-5">Register</h1>
            <form onSubmit = {onSubmitForm}>
                <input className="form-control my-3" type="email" name="email" placeholder="email" 
                value = {email}
                onChange={onChange}/>

                <input className="form-control my-3" type="password" name="password" placeholder="password" 
                value = {password}
                onChange={onChange}/>

                <input className="form-control my-3" type="text" name="name" placeholder="username" 
                value = {name}
                onChange={onChange}/>

                <button className="btn btn-success btn-block">Submit</button>
            </form>
            <Link to='/login'>Login</Link>
        </>
    )
}

export default Register
