import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

import { Page, CartList, Footer } from './styles';

import CartCard from '../../components/CartCard';
import { useHistory } from 'react-router-dom';

import ProductsService from '../../services/Products';

interface IProduct {
  id: number;
  image: string;
  availableQuantity: number;
  name: string;
  description: string;
  price: number;
}
export default function Home() {
  const history = useHistory();

  const [cart, setCart] = useState(
    JSON.parse(window.localStorage.getItem('cart') || '{}')
  );
  const [products, setProducts] = useState([]);
  useEffect(() => {
    ProductsService.getAll()
      .then(result => {
        setProducts(result.data.products);
      })
      .catch(error => console.error(error));
  }, []);

  const totalPrice = () => {
    const productIDs = Object.keys(cart);
    if (productIDs.length === 0) return 0;
    const cartProducts: IProduct[] = productIDs.map((id: string) => {
      return products.filter((product: IProduct) => {
        return product.id === parseInt(id);
      })[0];
    });
    let total = 0;
    cartProducts.forEach((product: IProduct) => {
      product = product || {};
      total += 'price' in product ? product.price * cart[String(product.id)] : 0;
    });
    return total;
  };

  return (
    <Page>
      <Header />
      <CartList>
        {products.map((product: IProduct, index: number) => {
          if (cart[String(product.id)] === undefined) {
            return '';
          }
          return (
            <CartCard
              image={product.image}
              title={product.name}
              price={product.price}
              quantity={cart[String(product.id)]}
            />
          );
        })}
      </CartList>
      <Footer>
        <h1>Finalize seu pedido</h1>
        <div>
          <p>R${totalPrice()}</p>
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
