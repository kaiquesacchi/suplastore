import styled from 'styled-components';

export const Page = styled.div`
  min-height: 100vh;
  background-color: #eee;
  width: 100vw;
`;
export const Content = styled.ul`
  margin: 10vh 0 0 25vw;
  padding-top: 5vh;
  width: 50vw;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    width: 80%;
    height: 5vh;
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
    margin-bottom: 10px;
    span:last-child {
      height: 100%;
      width: 100%;
      border-radius: 100vh;
      background-color: #ddd;
      align-items: center;
      display: flex;
      justify-content: center;
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
