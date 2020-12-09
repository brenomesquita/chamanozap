import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeProvider';
import burguer from '../../images/burguer.png';

const Div = styled.div`
  background-color: ${(props) => props.theme.lightGray};
  height: 100pt;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  border-radius: 50%;
  background-color: gold;
  width: 7em;
  height: 7em;
  margin-left: 1em;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const Text = styled.span`
  margin-left: 3em;
  display: flex;
  flex-direction: column;
`;

const Type = styled.span`
  color: ${(props) => props.theme.darkGray3};
  font-weight: 500;
`;

const Description = styled.span`
  color: ${(props) => props.theme.darkGray3};
  margin-right: 1em;
`;

const StoreHeader = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Div theme={theme}>
      <Img src={burguer} />
      <Text>
        <Title>
          HamburGueria Digital <Type theme={theme}>online</Type>
        </Title>
        <Description theme={theme}>
          Lanches feitos com pães de fermentação natural, queijos artesanais, saladas orgânicas e
          molhos caseiros.
        </Description>
      </Text>
    </Div>
  );
};

export default StoreHeader;
