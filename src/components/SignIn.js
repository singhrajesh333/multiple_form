import React,{useState} from "react";
import { Link } from "react-router-dom";




const SignIn = props => {
  const [val, setVal] = useState({
    username2: '',
    password3: '',
  });
  

  

  const handleOnSubmit = (event) => {
    event.preventDefault();
   
    props.history.push({
      pathname: '/List',
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
          name="username2"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-control">
      <label>password</label>
        <input
          type="text"
          placeholder="Enter your password"
          name="password3"
          onChange={handleInputChange}
        />
        <Link to = '/SignUp'>create an account</Link>
      </div>
      <button type='text'>submit</button>
      </form>
      
      </div>
  );
};

export default SignIn;

