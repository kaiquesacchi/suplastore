import styled from 'styled-components';

export const Page = styled.div`
  background-color: #eee;
  width: 100vw;
  min-height: 100vh;
`;

export const Content = styled.div`
  margin: 10% 20% 0;
  padding: 3% 10%;
  text-align: center;
  background-color: white;
  h1 {
    border-bottom: 3px solid orange;
  }
  p {
    margin-bottom: 5vh;

    :last-child {
      padding: 3%;
      border: 3px solid orange;
      background-color: #333;
      color: white;
      a {
        color: orange;
      }
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
