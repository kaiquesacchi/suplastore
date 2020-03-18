import React, { useState, useEffect } from 'react';
import { Page } from './styles';
import ProductsService from '../../services/Products';

import ProductsJSON from './products.json';

import Header from '../../components/Header';

const populateProducts = () => {
  ProductsJSON.defaultProducts.forEach(product => {
    ProductsService.create(product).then((_: any) => {
      console.log('Products created!');
    });
  });
};

interface IProduct {
  id: number;
  image: string;
  availableQuantity: number;
  name: string;
  description: string;
  price: number;
}

export default function Admin() {
  const [products, setProducts] = useState([]);
  const loadProducts = () => {
    ProductsService.getAll()
      .then(result => {
        setProducts(result.data.products);
      })
      .catch(error => console.error(error));
  };
  useEffect(loadProducts, []);
  return (
    <Page>
      <Header />
      <section>
        <h1>Produtos</h1>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Quantidade</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: IProduct) => {
              return (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.availableQuantity}</td>
                  <td>{product.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button onClick={populateProducts}>Popular banco de dados</button>
      </section>
    </Page>
  );
}
