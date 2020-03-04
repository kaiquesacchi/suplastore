import React from 'react';

import Header from '../../components/Header';

import { Page, Content } from './styles';

export default function Home() {
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
      </Content>
    </Page>
  );
}
