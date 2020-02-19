import React from 'react';
import styled from 'styled-components';

const SCAdsCard = styled.div`
  margin: 40px auto;
  width: 70vw;
  height: 300px;
  background-color: white;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  div.gradient {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, transparent 20%, black 70%);
    position: absolute;
    top: 0;
    left: 0;
  }

  p {
    position: absolute;
    top: 5%;
    left: 75%;
    color: white;
    font-size: 2.3rem;
    text-align: center;
    margin-right: 5%;
  }
`;

interface Props {
  image: any;
  link: string;
  text: string;
}

export default function AdsCard({ image, link, text }: Props) {
  return (
    <SCAdsCard>
      <a href={link}>
        <img src={image} alt="Advertisement." />
        <div className="gradient" />
        <p>{text}</p>
      </a>
    </SCAdsCard>
  );
}
