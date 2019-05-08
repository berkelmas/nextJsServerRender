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
              <Link href={`/articles?title=${this.state.search}&page=1`} as={`/arama/${this.state.search}/1`}><a className="btn btn-info" type="button">Ara</a></Link>
            </div>
          </div>

            {this.props.data.map((makale, index) => <MakaleCard key={index} articleTitle={makale.title} articleMessage={makale.message} articleDate={makale.publisheddate} />)}


            <ul class="pagination">
              {[...Array(this.props.pageCount)].map((e, i) =>
                <Link href={this.props.titleQuery ? `/articles?page=${i+1}&title=${this.props.titleQuery}` : `/articles?page=${i+1}`} as={this.props.titleQuery ? `/arama/${this.props.titleQuery}/${i+1}` : `/sayfa/${i+1}`} ><a class="page-link">{i+1}</a></Link>
              )}
            </ul>

        </Col>
      </Row>
    )
  }
}

export default ArticleCards;
