import React from 'react';
import styled from 'styled-components';
import Robot from "../assets/robot3.gif";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Logout from './Logout';

const Welcome = ({currentUser}) => {

const [userName, setUserName] = useState("");

  useEffect(() => {
    async function fetchData() {
    setUserName(
      await JSON.parse(
        localStorage.getItem('chat-app-user')
      ).username
    );
      }
      fetchData();
  }, []);

  return (
    <Container>
     <div className="upper" >
      <div className='logo'>
      <Logout />
      </div>
      
  </div>
     <div className="welcome">
    <img src={Robot} alt="" />
    <h1>
      Welcome, <span>{userName}!</span>
    </h1>
    <h3>Ready to connect? Select a chat and start messaging.</h3>
    </div>
  </Container>
  )
}

const Container = styled.div`
display: grid;
    grid-template-rows: 10% 90%;
.upper{
  margin-top:1.5rem;
  .logo{
     float:right;
     margin-right:2rem;
  }
}
.welcome{
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
h1{
  padding-bottom:0.6rem;
}
  img {
    height: 10rem;
  }
  span {
    color: #03e2ff;
  }
}
`

export default Welcome