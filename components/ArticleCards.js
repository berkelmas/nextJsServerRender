import React from 'react';
import Link from 'next/link';
import {Col, Row, Card, CardTitle, CardText,
        CardFooter, Spinner, Pagination, PaginationItem, PaginationLink} from 'reactstrap';

import MakaleCard from './micros/MakaleCard';

class ArticleCards extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      search: ''
    }
  }

  render() {
    return (
      <Row className="mt-5">
        <Col xs={{size: 10, offset: 1}} md={{ size: 6, offset: 3 }}>
          <Card className="mt-5">
            <CardFooter className="shadow display-4 text-center">Makaleler</CardFooter>
          </Card>

          <div className="input-group mb-3 mt-4">
            <input onChange={e => this.setState({search : e.target.value})} type="text" className="form-control" placeholder="Makale Ara" />
            <div className="input-group-append">
              <Link href={'/articles?&title=' + this.state.search}><a className="btn btn-outline-info" type="button">Ara</a></Link>
            </div>
          </div>

            {this.props.data.map((makale, index) => <MakaleCard key={index} articleTitle={makale.title} articleMessage={makale.message} articleDate={makale.publisheddate} />)}
            <Pagination className="d-flex justify-content-center mt-4">
              {[...Array(this.props.pageCount)].map((e, i) =>
                <PaginationItem key={i}>
                  <Link href={this.props.titleQuery ? `?page=${i+1}&title=${this.props.titleQuery}` : `?page=${i+1}`} as={this.props.titleQuery ? `?page=${i+1}&title=${this.props.titleQuery}` : `/sayfa/${i+1}`}>
                    <PaginationLink>
                      {i+1}
                    </PaginationLink>
                  </Link>
                </PaginationItem>
              )}
            </Pagination>
        </Col>
      </Row>
    )
  }
}

export default ArticleCards;
