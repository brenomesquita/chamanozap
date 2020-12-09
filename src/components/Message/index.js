import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeProvider';

const MyMessage = styled.li`
  background-color: ${props => props.theme.lightGreen};
  display: inline;
  font-family: Helvetica, Sans-Serif;
  padding: 10px;
  border-radius: 10px;
  margin-right: 41px;
  width: fit-content;
  margin-bottom: 15px;
  align-self: flex-end;
  max-width: 80%;
`;

const BotMessage = styled.li`
  display: inline;
  font-family: Helvetica, Sans-Serif;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  margin-right: 41px;
  width: fit-content;
  margin-bottom: 15px;
  max-width: 80%;
`;

const Time = styled.span`
  color: ${props => props.theme.darkGray2};
  font-size: 12px;
  padding: 0 5px 0 19px;
  position: relative;
  top: 6px;
`;

const Message = ({ name, message, time }) => {
  const { theme } = useContext(ThemeContext);

  if (name === 'Chama no zap') {
    return (
      <BotMessage>
        {message}
        <Time theme={theme}>{time}</Time>
      </BotMessage>
    );
  }
  return (
    <MyMessage theme={theme}>
      {message}
      <Time theme={theme}>{time}</Time>
    </MyMessage>
  );
};

Message.default = {
  time: '10:39 AM',
  image: '/',
};

Message.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  time: PropTypes.string,
  image: PropTypes.string,
};

export default Message;
