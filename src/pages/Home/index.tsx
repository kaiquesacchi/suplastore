import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import AdsCard from '../../components/AdsCard';

import { Page, PageSelector } from './styles';

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

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(
    () => {
      setPage(1);
    },
    [active]
  );

  useEffect(
    () => {
      let response;
      if (active === 'topsellers') {
        response = ProductsService.getAll(page, 3);
      } else {
        response = ProductsService.getByType(active || 'topsellers', page, 3);
      }
      response
        .then((result: any) => {
          setProducts(result.data.products);
          setTotalPages(result.data.pages);
        })
        .catch((error: any) => console.error(error));

      AdvertisementsService.getByOwner('gitforce').then(result => {
        setAdvertisements(result.data.advertisements);
      });
    },
    [active, page]
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
      <PageSelector>
        <div
          className="arrow"
          onClick={() => {
            if (page > 1) setPage(page - 1);
          }}
        >
          &lt;
        </div>
        <div>
          Página {page} de {totalPages}
        </div>
        <div
          className="arrow"
          onClick={() => {
            if (page < totalPages) setPage(page + 1);
          }}
        >
          &gt;
        </div>
      </PageSelector>
    </Page>
  );
}
