import React, { useState } from 'react';

import UsersService from '../../services/Users';

import Header from '../../components/Header';

import { Page, Content, Form, Tabs } from './styles';
import { useHistory } from 'react-router-dom';

export default function Authentication() {
  const history = useHistory();
  const [activeTab, setActiveTab] = useState('sign-in');

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const inputs = () => {
    if (window.localStorage.getItem('user') !== null) {
      history.push('profile');
    }
    return activeTab === 'sign-up'
      ? [
          {
            placeholder: 'Nome Completo',
            type: 'text',
            inputSetter: setInputName
          },
          {
            placeholder: 'E-mail',
            type: 'email',
            inputSetter: setInputEmail
          },
          {
            placeholder: 'Senha',
            type: 'password',
            inputSetter: setInputPassword
          }
        ]
      : [
          {
            placeholder: 'E-mail',
            type: 'email',
            inputSetter: setInputEmail
          },
          {
            placeholder: 'Senha',
            type: 'password',
            inputSetter: setInputPassword
          }
        ];
  };

  const signIn = () => {
    UsersService.getByEmail(inputEmail)
      .then(result => {
        if (inputPassword === result.data.password) {
          window.localStorage.setItem('user', JSON.stringify(result.data));
          console.log('SignIn completed.');
          history.push('/profile');
        } else {
          console.log('Wrong password');
        }
      })
      .catch(error => console.log(error));
  };

  const signUp = () => {
    UsersService.create(inputName, inputEmail, inputPassword)
      .then(result => {
        console.log(result);
        signIn();
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Page>
      <Header />
      <Content>
        <Tabs>
          <div
            className={activeTab === 'sign-up' ? 'active' : ''}
            onClick={() => setActiveTab('sign-up')}
          >
            <p>
              <b>Criar</b> uma conta
            </p>
          </div>
          <div
            className={activeTab === 'sign-in' ? 'active' : ''}
            onClick={() => setActiveTab('sign-in')}
          >
            <p>
              <b>Entrar</b> em sua conta
            </p>
          </div>
        </Tabs>
        <Form>
          {inputs().map((input, index) => {
            return (
              <input
                placeholder={input.placeholder}
                type={input.type}
                key={index}
                onChange={event => input.inputSetter(event.target.value)}
              />
            );
          })}
          {activeTab === 'sign-up' ? (
            <button onClick={signUp}>Registrar</button>
          ) : (
            <button onClick={signIn}>Entrar</button>
          )}
        </Form>
      </Content>
    </Page>
  );
}
