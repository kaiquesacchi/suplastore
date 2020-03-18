import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import AdsCard from '../../components/AdsCard';

import { Page } from './styles';

import ProductsService from '../../services/Products';
import { useParams } from 'react-router-dom';
import AdvertisementsService from '../../services/Advertisements';

interface IProduct {
  id: number;
  image: string;
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

export default function Home() {
  const { active } = useParams();
  const [products, setProducts] = useState([]);
  const [advertisements, setAdvertisements] = useState([]);
  useEffect(
    () => {
      let response;
      if (active === 'topsellers') {
        response = ProductsService.getAll();
      } else {
        response = ProductsService.getByType(active || 'topsellers');
      }
      response
        .then((result: any) => {
          setProducts(result.data.products);
        })
        .catch((error: any) => console.error(error));

      AdvertisementsService.getByOwner('gitforce').then(result => {
        setAdvertisements(result.data.advertisements);
      });
    },
    [active]
  );
  return (
    <Page>
      <Header active={active} />
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
      {advertisements.map((advertisement: IAdvertisement, index: number) => {
        return (
          <AdsCard
            key={advertisement.id}
            image={advertisement.image}
            link={advertisement.link}
          />
        );
      })}
    </Page>
  );
}
