import React from 'react';
import {Col, Row, Card, CardTitle, CardText,
        CardFooter, Spinner} from 'reactstrap';

import MakaleCard from './micros/MakaleCard';

class ArticleCards extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      articles : [],
      loading: true
    }
  }

  componentDidMount() {
    const {firebase} = this.props;
    const articles = firebase.database().ref('articles');

    articles.on('child_added', snapshot => {
      const article = snapshot.val();

      this.setState(state => {
        const articles = [article ,...state.articles];
        return({
          articles,
          loading: false
        })
      })
    })
  }
  componentWillUnmount() {
    const {firebase} = this.props;
    const articles = firebase.database().ref('articles');
    articles.orderByChild('publishdate').off('child_added');
  }

  render() {
    return (
      <Row className="mt-5">
        <Col xs={{size: 10, offset: 1}} md={{ size: 6, offset: 3 }}>
          <Card className="mt-5">
            <CardFooter className="shadow display-4 text-center">Makaleler</CardFooter>
          </Card>
            {this.state.loading && <div className="d-flex justify-content-center p-5"><Spinner className="mt-5 " style={{ width: '6rem', height: '6rem' }} type="grow" /></div>}
            {this.state.articles.map((makale, index) => <MakaleCard key={index} articleTitle={makale.message} articleMessage={makale.message} articleDate={makale.publishdate} />)}
        </Col>
      </Row>
    )
  }
}

export default ArticleCards;
