import styled from 'styled-components';

export const Page = styled.div`
  min-height: 100vh;
  background-color: #eee;
  width: 100vw;
`;
export const Content = styled.div`
  margin: 10vh 0 0 25vw;
  width: 50vw;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Tabs = styled.div`
  width: 100%;
  height: 10vh;
  display: grid;
  grid-template-columns: 1fr 1fr;

  background-color: #ccc;
  div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &.active {
      background-color: white;
    }
  }
`;

export const Form = styled.div`
  box-sizing: border-box;
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vh;
  input {
    width: 100%;
    height: 40px;
    margin-bottom: 30px;
    border: none;
    border-bottom: 2px solid black;
    font-size: 20px;
    :focus {
      outline: none;
      border-bottom: 2px solid orange;
    }
  }

  button {
    width: 10vw;
    height: 4vw;
    border-radius: 2vw;
    border: none;
    background-color: orange;
    color: white;
    font-size: 1.5rem;
    margin: 5vh 0;
  }
`;
