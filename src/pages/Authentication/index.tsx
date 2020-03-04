import React, { useState } from 'react';

import Header from '../../components/Header';

import { Page, Content, Form, Tabs } from './styles';
import { useHistory } from 'react-router-dom';

export default function Authentication() {
  const history = useHistory();
  const [activeTab, setActiveTab] = useState('sign-in');

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputRepeatPassword, setInputRepeatPassword] = useState('');

  const inputs = () => {
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
          },
          {
            placeholder: 'Repetir Senha',
            type: 'password',
            inputSetter: setInputRepeatPassword
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
              <input placeholder={input.placeholder} type={input.type} key={index} />
            );
          })}
          {activeTab === 'sign-up' ? (
            <button onClick={history.goBack}>Registrar</button>
          ) : (
            <button onClick={history.goBack}>Entrar</button>
          )}
        </Form>
      </Content>
    </Page>
  );
}
