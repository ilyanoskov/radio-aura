import React from 'react';
import styled from 'react-emotion';

import Header from './Header';
import Hero from './Hero';
import AboutUs from './AboutUs';
import Shows from './Shows';
import Team from './Team';
import Contacts from './Contacts';

const contentful = require('contentful');

const client = contentful.createClient({
  space: 'arfglkqpngnf',
  accessToken:
    '6bf48f6cb865e1b9795b668a34cd91f4341e24d7f71f1b4e72a15a7b19ade50f'
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

class Home extends React.Component {
  state = {
    djs: [],
    sales: [],
    producers: []
  };

  componentDidMount() {
    client
      .getEntries({
        content_type: 'dj',
        order: 'sys.createdAt'
      })
      .then(djs => this.setState({ djs }));

    client
      .getEntries({
        content_type: 'sales',
        order: 'sys.createdAt'
      })
      .then(sales => this.setState({ sales }));

    client
      .getEntries({
        content_type: 'producer',
        order: 'sys.createdAt'
      })
      .then(producers => this.setState({ producers }));
  }

  render() {
    const { djs, producers, sales } = this.state;
    return (
      <div>
        <Header />
        <Hero />
        <Shows />
        <Team {...{ djs, sales, producers }} />
        <AboutUs />
        <Contacts />
      </div>
    );
  }
}

export default Home;
