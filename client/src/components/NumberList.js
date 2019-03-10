import React from 'react';
import styled from 'styled-components';
import Number from './Number';

const StyledRepoList = styled.div`
  display: block;
  margin: auto;
  margin-bottom: 0.8em;
  position: relative;
`;

const NumberList = props => {
  const results = props.data;

  const resultsAsString = results.toString();

  let numbers;
  numbers = <Number primeNumbers={resultsAsString} />;

  return <StyledRepoList>{numbers} sfsdfd</StyledRepoList>;
};

export default NumberList;
