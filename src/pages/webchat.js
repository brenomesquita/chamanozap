import React, { useEffect, useRef, useState, useContext } from 'react';
import { Header } from '../components/Header/Header';
import Message from '../components/Message';
import TextInput from '../components/TextsInput';
import Footer from '../style/Footer';
import styled from 'styled-components';
import zapBg from '../images/zap-background.png';
import { ThemeContext } from '../context/ThemeProvider';
import StoreHeader from '../components/StoreHeader';

const { io } = window;
const ENDPOINT = 'http://localhost:3333'

const WebChat = () => {
  const socket = useRef();
  const [history, setHistory] = useState([{
    name: 'Eu', message: 'E aí, você tem o X-Bacon?', time: '11:15 AM'
  }]);

  const [event, setEvent] = useState('');

  useEffect(() => {
    socket.current = io(ENDPOINT);
    socket.current.on('botMessage', ({ name, message, time, next, username = '' }) => {
      if (message[0] === ',') { message = username + message; }
      setHistory((currentState) => (
        [...currentState, {
          name,
          message: message[0] === ',' ? username + message : message,
          time 
        } ]
      ));
      setEvent(next);
    });
    socket.current.emit('clientRegister', {});
    // socket.current.emit('confirmPhoneNumber', {});

  }, [])

  const handleSubmitMessage = (data) => {
    socket.current.emit(event, data);
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
    max-height: 55vh;
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
