import { Component } from 'react';

import {Row, Col, Button} from 'reactstrap';

import dynamic from 'next/dynamic';
const CKEditor = dynamic(() => import('./CkeditorComp'), {
  ssr: false
})

class CKeditor extends Component {
  constructor(props){
    super(props);
    this.state={
      article: 'Makale'
    }
  }

  static getInitialProps({ req, query }) {
    return {}
  }

  updateMakale = (event, editor) => {
    const data = editor.getData();
    this.setState({
      article: data
    })
  }

  saveArticle = e => {
    const {firebase} = this.props;
    const articles = firebase.database().ref('articles');
    articles.push({message: this.state.article, author: 'Berk Elmas'});
    this.setState({
      article: 'Makale Gonderildi'
    })
    e.preventDefault;
  }

  render() {
    return (
    <div>
    <Row className="mt-5">
      <Col sm="12" md={{ size: 8, offset: 2 }}>
      <h2 className="text-center">Makale Ekle</h2>
        <CKEditor
          data={this.state.article}
          onInit={ editor => {
          // You can store the "editor" and use when it is needed.
              console.log( 'Editor is ready to use!', editor );
          } }
          onChange={ ( event, editor ) => {
              this.updateMakale(event, editor)
          } }

          />
          <button onClick={this.saveArticle} className="btn btn-info mt-3 mb-5 w-100">Makale Ekle</button>
      </Col>
    </Row>
    </div>
    )
  }
}
export default CKeditor;
