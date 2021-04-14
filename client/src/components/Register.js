import React, { useState } from 'react'

function Register() {

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        name: ""
    })

    const {email, password, name} = inputs;

    const onChange = e => {
        setInputs({...inputs, [e.target.name] : e.target.value });
    }


    return (
        <>
            <h1 className="text-center my-5">Register</h1>
            <form>
                <input className="form-control my-3" type="email" name="email" placeholder="email" 
                value = {email}
                onChange={onChange}/>

                <input className="form-control my-3" type="password" name="password" placeholder="password" />

                <input className="form-control my-3" type="text" name="text" placeholder="text" />

                <button className="btn btn-success btn-block">Submit</button>
            </form>
        </>
    )
}

export default Register
