import React from 'react';
import styled from 'styled-components';

const SCCartCard = styled.div`
  margin: 40px auto;
  width: 20vw;
  height: 400px;
  background-color: white;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  div.gradient {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(transparent 60%, black 80%);
  }

  p {
    position: absolute;
    bottom: 10px;
    left: 20px;
    color: white;
  }
`;

interface Props {
  image: any;
  title: string;
  price: number;
  quantity: number;
}

export default function CartCard({ image, title, price, quantity }: Props) {
  return (
    <SCCartCard>
      <img src={image} alt="Cart product." />
      <div className="gradient" />
      <p>{`${quantity}x ${title}. Preço total: R$${quantity * price}`}</p>
    </SCCartCard>
  );
}
