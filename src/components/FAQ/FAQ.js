import React from 'react';
import Container from '../Container/Container';
import { dataFAQ } from '../../data/dataStore';
import Hero from '../Hero/Hero';


class FAQ extends React.Component {
  render() {
    return (
      <Container >
        <Hero titleText={dataFAQ.title} image={dataFAQ.image} />
        <h2>{dataFAQ.title}</h2>
        <p>{dataFAQ.content}</p>
      </Container>
    );
  }
}

export default FAQ; 