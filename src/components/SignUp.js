import React, { useState } from 'react';
import './SignUp.css'


const SignUp = (props) => {
  const [val, setVal] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.history.push({
      pathname: '/Blank',
      val
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setVal((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className='container'>
    
      <h2>Registration Form</h2>
      <form className="form" onSubmit={handleOnSubmit}>
        <div className="form-control">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            name="username"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
        <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
        <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
        <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Enter your confirm password"
            name="password2"
            onChange={handleInputChange}
          />
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default SignUp;
