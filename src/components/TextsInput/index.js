import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeProvider';

const Input = styled.input`
  width: 90vw;
  margin: 1vh 0 1vh 3vh;
  height: 32pt;
  border-radius: 16pt;
  border: 1px;
  box-shadow: 1px 1px 1px 1px #00000014;
  outline: none;
  padding-left: 21px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Button = styled.button`
  border-radius: 50%;
  border: 0;
  padding: 0;
  background: ${props => props.theme.darkGray};
  margin: 1vh 3vh 1vh 3vh;
  height: 40px;
  width: 40px;
  &:hover {
    cursor: pointer;
  }
`;

const I = styled.i`
  position: relative;
  top: 1.5px;
  left: 1.5px;
  color: white;
`;

const TextsInput = ({ iconName, onSubmit }) => {
  const [inputMessage, setInputMessage] = useState('');

  const handleSubmit = (text) => {
    if (text === '') return;
    onSubmit({ name: 'User', message: text, time: '10:39 AM' });
    setInputMessage('');
  };

  const { theme } = useContext(ThemeContext);

  return (
    <Form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
      <Input onChange={(e) => setInputMessage(e.target.value)} required type="text" />
      <Button theme={theme} type="button" name="action" onClick={() => handleSubmit(inputMessage)}>
        <I className="material-icons right">{iconName}</I>
      </Button>
    </Form>
  );
};

TextsInput.propTypes = {
  label: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default TextsInput;
