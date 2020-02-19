import styled from 'styled-components';

export const Page = styled.div`
  min-height: 100vh;
  background-color: #eee;
  width: 100vw;
  padding: 0 0 30px;
`;

export const CartList = styled.section`display: flex;`;

export const Footer = styled.section`
  position: fixed;
  bottom: 0;

  width: 100vw;
  height: 200px;

  background-color: white;

  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 20px;
  box-sizing: border-box;

  div {
    p {
      font-size: 3rem;
      margin: 0 0 20px;
    }
    button {
      background-color: white;
      border: 2px solid gray;
      border-radius: 30px;
      height: 60px;
      width: 200px;
    }
  }
`;
