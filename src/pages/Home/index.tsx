import React from 'react';

import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';

import { Page } from './styles';

import imageWheyProtein from '../../static/whey-protein.png';
import imageCreatina from '../../static/creatina.png';
import imagePalatinose from '../../static/palatinose.png';

const lorem =
  'Eu exercitation do est ea consequat mollit duis reprehenderit sit. Pariatur elit veniam sit eiusmod pariatur enim proident. Labore aliqua mollit sunt enim est id irure proident tempor commodo adipisicing amet.';

const products = [
  {
    image: imageWheyProtein,
    title: 'Whey Protein',
    description: lorem,
    price: 80.0
  },
  {
    image: imageCreatina,
    title: 'Creatina',
    description: lorem,
    price: 30.5
  },
  {
    image: imagePalatinose,
    title: 'Palatinose',
    description: lorem,
    price: 82.45
  }
];

interface IProduct {
  image: any;
  title: string;
  description: string;
  price: number;
}

export default function Home() {
  return (
    <Page>
      <Header />
      {products.map((product: IProduct, index: number) => {
        return (
          <ProductCard
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        );
      })}
    </Page>
  );
}
