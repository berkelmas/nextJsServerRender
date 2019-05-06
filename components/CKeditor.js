import { Component } from 'react';

import {Row, Col, Button, Input} from 'reactstrap';

import dynamic from 'next/dynamic';
const CKEditor = dynamic(() => import('./CkeditorComp'), {
  ssr: false
})

class CKeditor extends Component {
  constructor(props){
    super(props);
    this.state={
      article: 'Makale',
      isAdmin: false,
      articleTitle: ''
    }
  }

  componentDidMount() {
    const {firebase} = this.props;

    const token = localStorage.getItem('googleToken');
    if (token) {
      const credential = firebase.auth.GoogleAuthProvider.credential(null, token);
      firebase.auth().signInAndRetrieveDataWithCredential(credential)
              .then(res => {
                if (res.user.displayName === 'Berk Elmas') {
                  this.setState({
                    isAdmin: true
                  })
                }
              })
              .catch(err => console.log(err))
    }
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
    const date = new Date(); // auto add date.now()
    articles.push({title: this.state.articleTitle,message: this.state.article, author: 'Berk Elmas', publishdate: String(date) });
    this.setState({
      article: 'Makale Gonderildi',
      articleTitle: ''
    })
    e.preventDefault;
  }

  render() {
    console.log(this.state.articleTitle);
    return (
    <div>
    <Row className="mt-5">
      <Col sm="12" md={{ size: 8, offset: 2 }}>
      <h2 className="text-center">Makale Ekle</h2>
        <Input onChange={(e) => this.setState({articleTitle: e.target.value})} value={this.state.articleTitle} className="p-3 mt-3 mb-3" placeholder="Makale Başlığı" />
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
        {this.state.isAdmin ? <button onClick={this.saveArticle} className="btn btn-info mt-3 mb-5 w-100">Makale Ekle</button> : <p className="text-center">Sadece Berk Elmas Makale Yükleyebilir</p>}
      </Col>
    </Row>
    </div>
    )
  }
}
export default CKeditor;
