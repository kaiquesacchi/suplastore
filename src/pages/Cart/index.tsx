import React from 'react';

import Header from '../../components/Header';

import { Page, CartList, Footer } from './styles';

import imageWheyProtein from '../../static/whey-protein.png';
import imageCreatina from '../../static/creatina.png';
import imagePalatinose from '../../static/palatinose.png';

import CartCard from '../../components/CartCard';
import { useHistory } from 'react-router-dom';

const cart = [
  {
    image: imageWheyProtein,
    title: 'Whey Protein',
    price: 80.0,
    quantity: 3
  },
  {
    image: imageCreatina,
    title: 'Creatina',
    price: 30.5,
    quantity: 2
  },
  {
    image: imagePalatinose,
    title: 'Palatinose',
    price: 82.45,
    quantity: 1
  }
];

interface IProduct {
  image: any;
  title: string;
  price: number;
  quantity: number;
}

export default function Home() {
  const history = useHistory();
  return (
    <Page>
      <Header />
      <CartList>
        {cart.map((product: IProduct, index: number) => {
          return (
            <CartCard
              image={product.image}
              title={product.title}
              price={product.price}
              quantity={product.quantity}
            />
          );
        })}
      </CartList>
      <Footer>
        <h1>Finalize seu pedido</h1>
        <div>
          <p>R$500,50</p>
          <button
            onClick={() => {
              history.push('/orderCompleted');
            }}
          >
            Finalizar Pedido
          </button>
        </div>
      </Footer>
    </Page>
  );
}
