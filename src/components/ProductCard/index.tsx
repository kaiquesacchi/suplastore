import React, { useState } from 'react';
import styled from 'styled-components';

const SCProductCard = styled.div`
  margin: 40px auto;
  width: 70vw;
  height: 300px;
  background-color: white;
  display: grid;
  grid-template-columns: 3fr 3fr 2fr;
  background-color: #333;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Description = styled.div`
  color: white;
  padding: 5%;
  box-sizing: border-box;
  h1 {
    font-size: 2rem;
  }
`;

const Price = styled.div`
  color: green;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  div {
    height: 60px;
    display: grid;
    grid-template-columns: 2fr 5fr;
    grid-gap: 20px;
    padding: 0 5%;
    input {
      font-size: 1.3rem;
      text-align: center;
      border: none;
      border-radius: 10px;
      padding: 5%;
      box-sizing: border-box;
      height: 100%;
      width: 100%;
    }
    button {
      font-size: 1.1rem;
      height: 100%;
      width: 100%;
      background-color: green;
      color: white;
      border: none;
      border-radius: 10px;
    }
  }
`;

interface Props {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

const addToCart = (id: number, quantity: number) => {
  const cart = window.localStorage.getItem('cart');
  let cartObj = JSON.parse(cart || '{}');
  cartObj[String(id)] = (cartObj[String(id)] || 0) + quantity;
  window.localStorage.setItem('cart', JSON.stringify(cartObj));
  alert('Produto adicionado ao carrinho!');
};
export default function ProductCard({ id, image, title, description, price }: Props) {
  const [quantity, setQuantity] = useState(0);
  return (
    <SCProductCard>
      <img src={image} alt={title} />
      <Description>
        <h1>{title}</h1>
        <p>{description}</p>
      </Description>
      <Price>
        <p>R${price}</p>
        <div>
          <input
            placeholder="Qtde."
            onChange={event => {
              setQuantity(parseInt(event.target.value));
            }}
          />
          <button
            onClick={() => {
              addToCart(id, quantity);
            }}
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </Price>
    </SCProductCard>
  );
}
