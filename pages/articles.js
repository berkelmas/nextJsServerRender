import React from 'react';
import Head from 'next/head';

import fetch from 'isomorphic-unfetch';

import NavbarUst from '../components/NavbarUst';
import ArticleCards from '../components/ArticleCards';

class Articles extends React.Component {
  static async getInitialProps(){
    const res = await fetch('http://localhost:3001/articles')
    let data = await res.json();
    data = data['docs'];
    return {data: data.reverse()}
  }

  render() {
    return (
    <React.Fragment>
      <Head>
        <title>Berk Elmas | Makaleler</title>
        <link rel='stylesheet' href='static/css/reactstrap.min.css' />
        <link rel='stylesheet' href='static/css/style.css' />
      </Head>
      <NavbarUst/>
      <ArticleCards data={this.props.data} />
      <br/>
      <hr/>
    </React.Fragment>
    )
  }
}

export default Articles;
