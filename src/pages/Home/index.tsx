import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import AdsCard from '../../components/AdsCard';

import { Page } from './styles';

import imageAcademia from '../../static/ads-academia.jpg';

import ProductsService from '../../services/Products';

const ad = {
  image: imageAcademia,
  link: 'https://google.com',
  text: 'As melhores academias a UM CLIQUE de distância'
};

interface IProduct {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
}

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    ProductsService.getAll()
      .then(result => {
        setProducts(result.data.products);
      })
      .catch(error => console.error(error));
  }, []);
  return (
    <Page>
      <Header />
      {products.map((product: IProduct, index: number) => {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.name}
            description={product.description}
            price={product.price}
          />
        );
      })}
      <AdsCard image={ad.image} link={ad.link} text={ad.text} />;
    </Page>
  );
}
