import { useState } from 'react';

 
export default function Form() {
 
  // States for registration
  const [fname, setFName] = useState('');
  const [mname, setMName] = useState('');
  const [lname, setLName] = useState('');
  const [course, setMyCourse] = useState("");
  const [gender, setGender] = useState("");
  const [Phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the name change
  const handleFName = (e) => {
    setFName(e.target.value);
    setSubmitted(false);
  };
 
  const handleMName = (e) => {
    setMName(e.target.value);
    setSubmitted(false);
  };
 
  const handleLName = (e) => {
    setLName(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the course change
  const handleCourse = (e) => {
    setMyCourse(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the gender change
  const handleGender = (e) => {
    setGender(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the phone change
  const handlePhone = (e) => {
    setPhone(e.target.value);
    setSubmitted(false);
  };
 
 
   // Handling the address change
   const handleAddress = (e) => {
    setAddress(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the Re-password change
  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (fname === '' || mname === '' || lname === '' || course === '' ||Phone === '' || address === '' || email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
 
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {fname} successfully registered!!</h1>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
 
  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form>
        {/* Labels and inputs for form data */}
        <label className="label">First Name</label>
        <input onChange={handleFName} className="input"
          value={fname} type="text" />
 
<label className="label">Middle Name</label>
        <input onChange={handleMName} className="input"
          value={mname} type="text" />
 
<label className="label">Last Name</label>
        <input onChange={handleLName} className="input"
          value={lname} type="text" />
 
<label className="label">Course:
<select value={course} onChange={handleCourse}>
        <option value="Course1">Course1</option>
        <option value="Course2">Course2</option>
        <option value="Course3">Course3</option>
      </select>
      </label>

      <fieldset>
                <legend>Gender</legend>
                
                <input 
                    type="radio"
                    value={gender}
                    onChange={handleGender}

                />
                <label htmlFor="male">Male</label>
                <br />
                
                <input 
                    type="radio"
                    value={gender}
                    onChange={handleGender}

                />
                <label htmlFor="Female">Female</label>
                <br />
                
                <input 
                    type="radio"
                    value={gender}
                    onChange={handleGender}

                />
                <label htmlFor="Others">Others</label>
                <br />
                
            </fieldset>
 

      <label className="label">Phone</label>
        <input defaultCountry="US" onChange={handlePhone} className="input"
          value={Phone} type="text" />
 
 
 
 
      <label className="label">Address </label>
      <textarea value={address} onChange={handleAddress} />
 
        <label className="label">Email</label>
        <input onChange={handleEmail} className="input"
          value={email} type="email" />
 
        <label className="label">Password</label>
        <input onChange={handlePassword} className="input"
          value={password} type="password" />
 
 <label className="label">Re-type Password</label>
        <input onChange={handleCPassword} className="input"
          value={cpassword} type="password" />
 
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
 

