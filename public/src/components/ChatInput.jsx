import React,{useState} from 'react';
import styled from "styled-components";
import Picker from "emoji-picker-react";
import {IoMdSend} from 'react-icons/io';
import {BsEmojiSmileFill} from 'react-icons/bs';

export default function ChatInput({ handleSendMsg }) {


    const[showEmojiPicker,setShowEmojiPicker]=useState(false);
    const[msg,setMsg]=useState("");

    const handleEmojiPickerHideShow=()=>{
        setShowEmojiPicker(!showEmojiPicker);
    }

    const handleEmojiClick=(event,emojiObject)=>{
        // console.log(event.emoji);
        let message=msg;
        message+=emojiObject.emoji;
        setMsg(message);
    }

    const sendChat = (event) => {
      event.preventDefault();
      if (msg.length > 0) {
        handleSendMsg(msg);
        setMsg("");
      }
    }

  return (
    <Container>
    <div className="button-container">
        <div className="emoji">
        <BsEmojiSmileFill onClick={handleEmojiPickerHideShow}/>
        {showEmojiPicker && <Picker className='emojipicker' onEmojiClick={handleEmojiClick}/>}
        </div>
    </div>
    <form className="input-container" onSubmit={(event)=>{sendChat(event)}}>
    <input
          type="text"
          placeholder="Type your message here" value={msg} onChange={(e)=>setMsg(e.target.value)}/>
          <button type="submit">
          <IoMdSend />
        </button>
    </form>
    </Container>
  )
};

const Container = styled.div`
display: grid;
  align-items: center;
  grid-template-columns: 5% 95%;
  background-color: #080420;
  // padding-top:2rem;
  padding: 0 2rem ;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    padding: 0 1.5rem;
    gap: 1rem;
  }
  .button-container {
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    .emoji {
      position: relative;
      svg {
        font-size: 1.5rem;
        color: #ffff00c8;
        cursor: pointer;
      }
      .emoji-picker-react {
        position: absolute;
        top: -350px; 
        background-color: #080420;
        box-shadow: 0 5px 10px  #44c6d3;
        border-color: #44c6d3;
        .emoji-scroll-wrapper::-webkit-scrollbar {
          background-color: #080420;
          width: 5px;
          &-thumb {
            background-color:  #44c6d3;
          }
        }
        .emoji-categories {
          button {
            filter: contrast(0);
          }
        }
        .emoji-search {
          background-color: transparent;
          border-color:  #44c6d3;
          color: white;
        }
        .emoji-group:before {
          background-color: #080420;
        }     
    }
  }
}
      .input-container {
        width: 100%;
        border-radius: 2rem;
        display: flex;
        align-items: center;
        gap: 2rem;
        background-color: #5be2f12b;
        //  margin-bottom:1rem;
        input {
          width: 90%;
          height: 1.6rem;
          background-color: transparent;
          color: white;
          border: none;
          padding-left: 1rem;
          font-size: 1.2rem;
    
          &::selection {
            background-color: #9a86f3;
          }
          &:focus {
            outline: none;
          }
         
        }

        button {
          padding: 0.3rem 2rem;
          border-radius: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #5d97d2;
        //   background-color: #2f939a;
          border: none;
          @media screen and (min-width: 720px) and (max-width: 1080px) {
            padding: 0.3rem 1rem;
          
            svg {
              font-size: 1rem;
            }
          }
          svg {
            font-size: 2rem;
            color: white;
          }
         
        }
      
`;

