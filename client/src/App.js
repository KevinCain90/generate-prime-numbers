import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import axios from 'axios';
import NumberList from './components/NumberList';

const MainHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  min-height: 80px;
  z-index: 1000;
`;

const Inner = styled.div`
  width: 90%;
  max-width: 1025px;
  margin: auto;
`;

const MainTitle = styled.span`
  font-size: 1.4em;
  line-height: 100px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
`;

const MainContent = styled.div`
  width: 90%;
  max-width: 1025px;
  margin: auto;
  &:after {
    content: ' ';
    display: table;
    clear: both;
  }
`;

const StyledText = styled.input`
  height: 30px;
  border-radius: 2.5px;
  border: solid 1px #dedede;
  padding: 10px;
  box-sizing: border-box;
  font-size: 14px;
  width: 50%;
  &:focus {
    border: solid 1px #67caff;
  }
  min-width: 200px;
`;

const Button = styled.button`
  display: inline;
  color: blue;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 3px;
`;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      primeNumbers: [],
      searchNumber: ''
    };
  }

  onSearchChange = e => {
    this.setState({ searchNumber: e.target.value });
  };

  performSearch = () => {
    axios
      .get(`/primenumbers/${this.state.searchNumber}`)
      .then(res => {
        this.setState({
          primeNumbers: res.data
        });
      })
      .catch(error => {
        console.log('Error generating data correctly', error);
      });
  };

  render() {
    return (
      <div>
        <MainHeader>
          <Inner>
            <MainTitle>Kevin's Prime Number App</MainTitle>
            <form
              className='search-form'
              onSubmit={e => {
                e.preventDefault();
              }}
            >
              <StyledText
                type='search'
                onChange={this.onSearchChange}
                name='search'
                placeholder='Search...'
              />
              <Button onClick={this.performSearch}>Generate</Button>
            </form>
          </Inner>
        </MainHeader>
        <MainContent>
          <div>
            <NumberList data={this.state.primeNumbers} />
          </div>
        </MainContent>
      </div>
    );
  }
}
