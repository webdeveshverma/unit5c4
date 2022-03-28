import axios from "axios";
import { useState } from "react";

export const LoginSignUp = () => {

  const [Formdata,setFormData] =useState({})

  const handleChange=(e)=>{

    let {className,value,checked,type} =e.target;
    value =type ==="checkbox" ? checked:value
    setFormData({...Formdata,[className]:value})
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    axios.post("http://localhost:8080/users",Formdata).then(()=>{
      alert("user added")
      console.log(Formdata)

    })
  }
  return (
    <div className="loginSignUp">
      <form className="signUp" onSubmit={ handleSubmit}>
        <h1>SignUp</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={(event) => {handleChange(event) }}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={(event) => {handleChange(event) }}
          required
        />
        <br />
        <select value={""} className="location" onChange={(event) => {handleChange(event) }}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <label>Interests</label>
        <br />
        <label>technology</label>
        <input
          type="checkbox"
          className="technology"
          onChange={(event) => {handleChange(event) }}
        />
        <br />
        <label>food</label>
        <input type="checkbox" className="food" onChange={(event) => {handleChange(event) }} />
        <br />
        <label>movies</label>
        <input type="checkbox" className="movies" onChange={(event) => { handleChange(event)}} />
        <br />
        <label>culture</label>
        <input type="checkbox" className="culture" onChange={(event) => { handleChange(event)}} />
        <br />
        <label>art</label>
        <input type="checkbox" className="art" onChange={(event) => {handleChange(event) }} />
        <br />
        <label>drama</label>
        <input type="checkbox" className="drama" onChange={(event) => {handleChange(event) }} />
        <br />
        <label>image</label>
        <input
          type="text"
          className="image"
          onChange={(event) => {handleChange(event) }}
          required
        />
        <br />
        <input type="submit" className="submitSignUpForm" />
      </form>
      <form className="login" onSubmit={(e) => { }}>
        <h1>Login</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={(event) => {handleChange(event) }}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={(event) => {handleChange(event) }}
          required
        />
        <br />
        <input type="submit" className="submitLoginForm" />
      </form>
    </div>
  );
};
