import React from 'react';

import Header from '../../components/Header';

import { Page, Content } from './styles';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const history = useHistory();
  return (
    <Page>
      <Header />
      <Content>
        <h1>Parabéns!</h1>
        <p>Seu pedido foi realizado com sucesso!</p>
        <p>
          O boleto será enviado ao seu endereço de email assim que a compra for
          processada. Após o pagamento, as informações de rastreio do pacote também
          chegarão ao seu email.
        </p>
        <p>
          <b>Incrível!</b> Sua compra também rendeu um <b>DESCONTO DE 10%</b> na
          mensalidade de nosso parceiro <a href="https://google.com">GitFORCE</a>.
          Encontre os melhores personal-trainers de sua região e acelere seus ganhos!
        </p>
        <button onClick={() => history.push('')}>Voltar às compras</button>
      </Content>
    </Page>
  );
}
