import React from 'react'

const LoginScreen = () => {
    const handleClick = ()=>{
        console.log('Clickkkkkks');
    }
    return (
        <div className="container mt-5">
            <h1>LoginScreen</h1>
            <hr/>

            <button 
            className="btn btn-primary"
            onClick={ handleClick}>Click Here!!</button>

        </div>
    )
}

export default LoginScreen
