import React from 'react';
import {Col, Row, Card, CardTitle, CardText,
        CardFooter, Spinner} from 'reactstrap';

import MakaleCard from './micros/MakaleCard';

class ArticleCards extends React.Component {


  render() {
    return (
      <Row className="mt-5">
        <Col xs={{size: 10, offset: 1}} md={{ size: 6, offset: 3 }}>
          <Card className="mt-5">
            <CardFooter className="shadow display-4 text-center">Makaleler</CardFooter>
          </Card>
            {this.props.data.map((makale, index) => <MakaleCard key={index} articleTitle={makale.message} articleMessage={makale.message} articleDate={makale.publisheddate} />)}
        </Col>
      </Row>
    )
  }
}

export default ArticleCards;
