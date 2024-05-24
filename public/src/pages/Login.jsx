import React,{useState, useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import styled from "styled-components";
import {ToastContainer,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginRoute } from '../utils/APIRoutes';


const Login = () => {
  const navigate=useNavigate();

  useEffect(()=>{
   if(localStorage.getItem('chat-app-user')){
    navigate('/');
   }
  },[]);

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [values,setValues]=useState({
    username:"",
    password:"",
  });
  const handleSubmit= async (event)=>{
    event.preventDefault();
    
   if(handleValidation()){
    const{password,username}=values;
    const {data} = await axios.post(loginRoute,{
      username,
      password,
    });
    console.log(data.status);
    if(data.status===false){
      //  alert(data.msg);
      toast.error(data.msg,toastOptions);
      return false;
    }
    if(data.status===true){
      // console.log(data.msg);
      localStorage.setItem('chat-app-user',JSON.stringify(data.user));
    }
    navigate("/");
    } 
  };

  const handleValidation=()=>{
    const { username, password } = values;
    if (username === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    }
    return true;
  }

  const handleChange=(event)=>{
       setValues({...values,[event.target.name]:event.target.value});
  };

  return (
    <>
    <FormContainer>
        <form action="" onSubmit={(event)=>handleSubmit(event)}>
    <div className="brand">
      <img src="https://cdn-icons-png.flaticon.com/128/6873/6873405.png" alt="Logo" />
      <h1>zippy</h1>
    </div>
    <input type="text"
    placeholder='Username'
    name='username'
    min='3'
    onChange={(e)=> handleChange(e)}
    />
    <input type="password"
    placeholder='Password'
    name='password'
    onChange={(e)=> handleChange(e) }
    />
    <button type="submit">Login</button>
    <span>
    Dont't have an account? <Link to='/register'>Create One.</Link>
    </span>
    </form>
    </FormContainer>
    <ToastContainer/>
    </>
  );
}
const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  align-items: center;
  background-color:#252543;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #0698ee;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #76a6c3;
      outline: none;
    }
  }
  button {
    background-color: #1e66af;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color:#3b99c6;
      // color:black;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color:  #1e66af;
      text-decoration: none;
      font-weight: bold;
      &:hover {
        color:#3b99c6;
      }
    }
  } 

  `;
export default Login