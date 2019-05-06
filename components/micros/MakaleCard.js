import React from 'react';
import {Card, CardTitle, CardText, CardFooter} from 'reactstrap';

import renderHTML from 'react-render-html';
import Moment from 'react-moment';

const MakaleCard = props => {
  return (
    <Card className="mt-5">
      <CardTitle className="lead article-title text-center">{renderHTML(props.articleTitle)}</CardTitle>
      <div className="container text-center">{renderHTML(props.articleTitle)}</div>
      <CardFooter>Yayın Tarihi: <Moment locale="tr" fromNow ago date={new Date(props.articleDate)} /> önce</CardFooter>
    </Card>
  )
}

export default MakaleCard;
