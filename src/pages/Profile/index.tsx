import React from 'react';

import Header from '../../components/Header';

import { Page, Content } from './styles';
import { useHistory } from 'react-router-dom';

export default function Authentication() {
  const history = useHistory();
  let userObj: any = {};
  const user = window.localStorage.getItem('user');
  if (!user) history.push('/authentication');
  userObj = JSON.parse(user || '');

  const logout = () => {
    window.localStorage.removeItem('user');
    alert('Logout realizado com sucesso!');
    history.push('/authentication');
  };

  return (
    <Page>
      <Header />
      <Content>
        <li>
          <span>Nome</span>
          <span>{userObj.name}</span>
        </li>
        <li>
          <span>Email</span>
          <span>{userObj.email}</span>
        </li>

        <button onClick={logout}>Sair</button>
      </Content>
    </Page>
  );
}
