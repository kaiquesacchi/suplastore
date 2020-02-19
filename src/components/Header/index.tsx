import React from 'react';
import styled from 'styled-components';

import defaultProfilePicture from '../../static/default-profile-picture.png';
import { useHistory } from 'react-router-dom';

const SCHeader = styled.section`
  position: sticky;
  top: 0;
  left: 0;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

const UpperHeader = styled.section`
  width: 100vw;
  height: 80px;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  box-sizing: border-box;
`;

const Logo = styled.div`
  span {
    font-size: 3rem;
    font-weight: bolder;
    color: #333;
    &.white {
      color: white;
    }
  }
`;

const SubHeader = styled.section`
  height: 40px;
  width: 100vw;
  background-color: darkorange;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  box-sizing: border-box;

  button {
    font-size: 1.3rem;
    font-weight: 800;
    color: white;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
  }
`;

const Avatar = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  border: 2px solid white;
  background-color: white;

  img {
    width: 100%;
  }
`;

export default function Header() {
  const history = useHistory();

  return (
    <SCHeader>
      <UpperHeader>
        <Logo>
          <span>Supla</span>
          <span className="white">STORE</span>
        </Logo>
        <Avatar>
          <img src={defaultProfilePicture} alt="User profile" />
        </Avatar>
      </UpperHeader>
      <SubHeader>
        <button>Os Mais Vendidos</button>
        <button>Proteínas</button>
        <button>Carboidratos</button>
        <button>Vitaminas</button>
        <button onClick={() => history.push('/cart')}>Carrinho</button>
      </SubHeader>
    </SCHeader>
  );
}
