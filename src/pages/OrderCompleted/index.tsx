import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';

import { Page, Content } from './styles';

import DiscountsService from '../../services/Discounts';

interface IDiscount {
  id: number;
  owner: string;
  percentage: number;
  voucher: string;
  text: string;
  link: string;
}

export default function Home() {
  const history = useHistory();
  const [discounts, setDiscounts] = useState([]);

  useEffect(() => {
    DiscountsService.getByOwner('happyfit').then(result => {
      setDiscounts(result.data.discounts);
    });
  }, []);
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
        {discounts.map((discount: IDiscount) => {
          return (
            <p key={discount.id}>
              Incrível! {discount.text} <a href={discount.link}>Acesse agora!</a>
            </p>
          );
        })}
        <button onClick={() => history.push('')}>Voltar às compras</button>
      </Content>
    </Page>
  );
}
