import React from 'react';
import Head from 'next/head';

import fetch from 'isomorphic-unfetch';

import NavbarUst from '../components/NavbarUst';
import ArticleCards from '../components/ArticleCards';

class Articles extends React.Component {

  static async getInitialProps({query}){
    const res = await fetch(query.title ? `http://localhost:3001/articles?perPage=3&page=${query.page}&title=${query.title}` : `http://localhost:3001/articles?perPage=3&page=${query.page}`)
    let data = await res.json();
    const articles = data['docs'];
    const pageCount = data['pages'];
    const titleQuery = query.title
    return {data: articles.reverse(), pageCount, titleQuery}
  }

  render() {
    return (
    <React.Fragment>
      <Head>
        <title>Berk Elmas | Makaleler</title>
          <link rel="stylesheet" href="/static/css/reactstrap.min.css" />
          <link rel="stylesheet" href="/static/css/style.css" />
      </Head>
      <NavbarUst/>
      <ArticleCards titleQuery={this.props.titleQuery} data={this.props.data} pageCount={this.props.pageCount} />
      <br/>
      <hr/>
    </React.Fragment>
    )
  }
}

export default Articles;
