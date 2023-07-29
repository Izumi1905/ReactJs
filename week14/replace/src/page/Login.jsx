import React from 'react';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
    // const dispatch=useD
    const navigate = useNavigate();
    const emailRef = React.useRef();
    const passwordRef = React.useRef();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
        if( email === 'admin@gmail.com' && password === 'letmein'){
            navigate('/home')
            
        }
}
    return ( 
        <>
            <form action="">
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Email" ref={emailRef} />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="Password" ref={passwordRef}/>
                </div>
                <button type="submit" onClick={handleSubmit}>Login</button>
            </form>
        </>
    );
}
 
export default LoginForm;