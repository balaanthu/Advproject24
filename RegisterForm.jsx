import React from 'react';
import './RegisterForm.css';
import { FaUser,FaLock } from "react-icons/fa";

const RegisterForm = () => {
return (
<div className='wrapper1'>
<form action="">
<h1>Register</h1>
<div className="input-box1">
<input type="text" placeholder='Username' required />
<FaUser className='icon1' />
</div>
<div className="input-box1">
<input type="password" placeholder='Password' required />
<FaLock className='icon1'/>
</div>
{/* <div classname="input-box1">
<input type="text" placeholder='dd-mm-yyyy' required />
<FaCalender className='icon1'/>
</div> */}

<div className="remember-forgot1">
<label><input type="checkbox" />Remember me</label>
{/* <a href="#">Forgot password ?</a> */}
</div>

<button type="submit">Register</button>

<div className="register-link1">
<p>Aready have an account? <a href="/login">login</a></p>
</div>
</form>
</div>
);
};

export default RegisterForm;