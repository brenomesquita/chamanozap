import React, { useEffect, useRef, useState, useContext } from 'react';
import { Header } from '../components/Header/Header';
import Message from '../components/Message';
import TextInput from '../components/TextsInput';
import Footer from '../style/Footer';
import styled from 'styled-components';
import zapBg from '../images/zap-background.png';
import { ThemeContext } from '../context/ThemeProvider';
import StoreHeader from '../components/StoreHeader';
import io from 'socket.io-client';

import chatResponses from '../utils/chatResponses';
const {
  confirmPhoneNumber,
  whatIsYourName,
  whatIsYourCep,
  whatIsYourComplement,
  whatIsYourHouseNumber,
  payment,
} = chatResponses;

// const { io } = window;
const ENDPOINT = 'localhost:3333/';
const socket = io(ENDPOINT)

const botMessage = (name, message, next, time, username = '') => 
  ({ name, message, next, time, username });

const whatIsYourNameChat = ({ message }, setBot, username, setUserName) => {
  setUserName(message);
  setBot(botMessage(
    chatResponses[whatIsYourName.next].name,
    chatResponses[whatIsYourName.next].message,
    whatIsYourName.next,
    new Date(),
    username,
  ))
};
const confirmPhoneNumberChat = ({ message }, setBot, username) => {
  setBot(botMessage(
    chatResponses[confirmPhoneNumber.next].name,
    chatResponses[confirmPhoneNumber.next].message,
    confirmPhoneNumber.next,
    new Date(),
    username,
  ));
};

const whatIsYourCepChat = ({ message }, setBot, username) => {
  // registerCep(message);
  setBot(botMessage(
    chatResponses[whatIsYourCep.next].name,
    chatResponses[whatIsYourCep.next].message,
    whatIsYourCep.next,
    new Date(),
    username,
  ));
};

const whatIsYourComplementChat = ({ message }, setBot, username) => {
  // registerComplement(message);
  setBot(botMessage(
    chatResponses[whatIsYourComplement.next].name,
    chatResponses[whatIsYourComplement.next].message,
    whatIsYourComplement.next,
    new Date(),
    username,
  ));
};

const whatIsYourHouseNumberChat = ({ message }, setBot, username) => {
  // registerComplement(message);
  setBot(botMessage(
    chatResponses[whatIsYourHouseNumber.next].name,
    chatResponses[whatIsYourHouseNumber.next].message,
    whatIsYourHouseNumber.next,
    new Date(),
    username,
  ));
};
const paymentChat = ({ message }, setBot, username) => {
  // registerComplement(message);
  setBot(botMessage(
    chatResponses[payment.next].name,
    chatResponses[payment.next].message,
    payment.next,
    new Date(),
    username,
  ));
};

const findNext = (next, data, func, setBot, username, setUserName) => {
  switch(func) {
    case "whatIsYourName":
      whatIsYourNameChat(data, setBot, username, setUserName);
      break;
    case "confirmPhoneNumber":
      confirmPhoneNumberChat(data, setBot, username);
      break;
    case "whatIsYourCep":
      whatIsYourCepChat(data, setBot, username);
      break;
    case "whatIsYourComplement":
      whatIsYourComplementChat(data, setBot, username);
      break;
    case "whatIsYourHouseNumber":
        whatIsYourHouseNumberChat(data, setBot, username);
      break;
    default:
      paymentChat(data, setBot, username);
      break;
  }
}

const WebChat = () => {
  const [username, setUserName] = useState('');
  const [history, setHistory] = useState([{
    name: 'Eu', message: 'E aí, você tem o X-Bacon?', time: '11:15 AM'
  }]);
  const [event, setEvent] = useState('');
  const [bot, setBot] = useState('');


  useEffect(() => {
    setBot(botMessage(
      whatIsYourName.name,
      whatIsYourName.message,
      'whatIsYourName',
      new Date(),
      username,
    ));
    socket.emit('clientRegister', {});
    // socket.current.emit('confirmPhoneNumber', {});

  }, []);

  useEffect(() => {
    const { name, time, next, username = '' } = bot;
    let { message } = bot;
    if(name!== undefined) {
      const myTime = time.toString()
      if (message[0] === ',') { message = username + message; }
      setHistory((currentState) => (
        [...currentState, {
          name,
          message: message[0] === ',' ? username + message : message,
          myTime 
        } ]
      ));
      setEvent('next');
    }
  }, [bot])

  const handleSubmitMessage = (data) => {
    findNext(event, data, bot.next, setBot, username, setUserName);
    setHistory((currentState) => ([...currentState, data ]));
  }

  const Background = styled.div`
    background-image: url(${zapBg});
    background-position: center;
    background-repeat: repeat;
    background-size: 760px 1396px;
    height: 100vh;
    width: 100%;
  `;

  const Ul = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    max-height: 45vh;
    overflow: auto;
  `;

  const { theme } = useContext(ThemeContext);

  return (
    <Background>
      <Header />
      <StoreHeader />
      <div>
        <Ul className="collection">
          {history.map(({ name, message, time }) =>
            <Message
              key={time}
              name={ name }
              message={ message }
              time={ time }
            />
          )}
        </Ul>
      </div>
      <Footer theme={ theme }>
        <TextInput label="Enviar mensagem" iconName="send" onSubmit={handleSubmitMessage}/>
      </Footer>
    </Background>
  );
};

export default WebChat;
