import styled from 'styled-components';

export const Page = styled.div`
  background-color: #eee;
  width: 100vw;
  padding: 0 0 30px;
`;

export const PageSelector = styled.div`
  width: 80vw;
  height: 5vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  left: 10vw;

  background-color: darkorange;
  color: white;
  font-size: 1.3rem;
  font-weight: bold;

  div.arrow {
    border-radius: 80px;
    border: 1px solid white;
    padding: 0 50px;
  }
`;
