import React, { useState, useEffect } from "react";
import styled from "styled-components";


function Contacts({contacts,currentUser,changeChat}) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  useEffect(()=>{
    // console.log(contacts);
    if(currentUser){
      setCurrentUserImage(currentUser.avatarImage);
      setCurrentUserName(currentUser.username);
    }
  },[currentUser])

  const changeCurrentChat=(index,contact)=>{
        setCurrentSelected(index);
        changeChat(contact);
  }
  return(
     <>
  {
    currentUserImage && currentUserName && (
      <Container>
      <div className="brand">
      <img src="https://cdn-icons-png.flaticon.com/128/6873/6873405.png" alt="Logo" />
      <h3>zippy</h3>
      </div>
      <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  key={index}
                  onClick={()=>changeCurrentChat(index,contact)}
                >
                  <div className="avatar">
                    <img
                      src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                      alt=""
                    />
                  </div>
                  <div className="username">
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="current-user">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="username">
              <h2>{currentUserName}</h2>
            </div>
          </div>
      </Container>
        
    )
  }
  </>
  );
}
const Container =styled.div`
display: grid;
grid-template-rows: 10% 75% 15%;
overflow: hidden;
background-color: #080420;
.brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  img {
    height: 2rem;
  }
  h3 {
    color: white;
    text-transform: uppercase;
  }
}
.contacts {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding-bottom:0.8rem;
  gap: 0.8rem;
  &::-webkit-scrollbar {
    width: 0.2rem;
    &-thumb {
      background-color: #80deea35;
      width: 0.1rem;
      border-radius: 1rem;
    }
  }
  .contact {
    background-color: #80deea59;
    min-height: 5rem;
    cursor: pointer;
    width: 90%;
    border-radius: 0.2rem;
    padding: 0.4rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    transition: 0.5s ease-in-out;
    .avatar {
      img {
        height: 3rem;
      }
    }
    .username {
      h3 {
        color: white;
      }
    }
  }
  .selected {
    background-color: #5d97d2;
  }
}

.current-user {
  background-color: #1b4271;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  .avatar {
    img {
      height: 4rem;
      max-inline-size: 100%;
    }
  }
  .username {
    h2 {
      color: white;
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    gap: 0.5rem;
    .username {
      h2 {
        font-size: 1rem;
      }
    }
  }
}
`;

export default Contacts;