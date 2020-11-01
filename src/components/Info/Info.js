import React from 'react';
import Container from '../Container/Container';
import { dataInfo } from '../../data/dataStore';
import Hero from '../Hero/Hero';


const Info = () => (
  <Container>
    <Hero titleText={dataInfo.title} image={dataInfo.image} />
    <h2>{dataInfo.title}</h2>
    <p>{dataInfo.content}</p>
  </Container>
);

export default Info;