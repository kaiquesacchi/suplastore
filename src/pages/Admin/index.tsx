import React, { useState, useEffect } from 'react';
import { Page } from './styles';
import ProductsService from '../../services/Products';
import AdvertisementsService from '../../services/Advertisements';

import ProductsJSON from './products.json';
import AdvertisementsJSON from './ads.json';

import Header from '../../components/Header';

const populateProducts = () => {
  ProductsJSON.defaultProducts.forEach(product => {
    ProductsService.create(product).then((_: any) => {
      console.log('Products created!');
    });
  });
  alert('Banco de dados populado!');
};

const populateAds = () => {
  AdvertisementsJSON.defaultAds.forEach(advertisement => {
    AdvertisementsService.create(advertisement).then((_: any) => {
      console.log('Advertisement created!');
    });
  });
  alert('Banco de dados populado!');
};

interface IProduct {
  id: number;
  image: string;
  availableQuantity: number;
  name: string;
  description: string;
  price: number;
}

interface IAdvertisement {
  id: number;
  image: string;
  owner: string;
  link: string;
}

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [advertisements, setAdvertisements] = useState([]);
  const loadProducts = () => {
    ProductsService.getAll()
      .then(result => {
        setProducts(result.data.products);
      })
      .catch(error => console.error(error));
  };
  const loadAdvertisements = () => {
    AdvertisementsService.getAll()
      .then(result => {
        setAdvertisements(result.data.advertisements);
      })
      .catch(error => console.error(error));
  };
  useEffect(() => {
    loadProducts();
    loadAdvertisements();
  }, []);
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
      <section>
        <h1>Propagandas</h1>
        <table>
          <thead>
            <tr>
              <th>Imagem</th>
              <th>Dono</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {advertisements.map((advertisement: IAdvertisement) => {
              return (
                <tr key={advertisement.id}>
                  <td>
                    <img
                      alt="advertisement"
                      style={{ width: '30vw' }}
                      src={advertisement.image}
                    />
                  </td>
                  <td>{advertisement.owner}</td>
                  <td>{advertisement.link}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button onClick={populateAds}>Popular banco de dados</button>
      </section>
    </Page>
  );
}
