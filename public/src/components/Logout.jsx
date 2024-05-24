import React from 'react'
import { useNavigate } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";
import styled from "styled-components";

export default function Logout() {

    const navigate=useNavigate();
    const handleClick=async ()=>{
        localStorage.clear();
        navigate('/login');
    }
  return (
    <Button>
        <BiPowerOff onClick={handleClick}/>
    </Button>
  )
}


const Button = styled.button`
display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #5d97d2;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
  &:hover {
    background-color:#3b99c6;
  }
`;
