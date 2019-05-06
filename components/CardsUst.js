import React, {Fragment} from 'react';
import {Row, Col, Card, CardTitle, CardText, Button,
        InputGroup, Input, InputGroupAddon, Form, FormGroup,
        Spinner
      } from 'reactstrap';

import { FaGooglePlusG } from 'react-icons/fa';

class CardsUst extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messages: [],
      input: '',
      loginState : false,
      loading: true,
      name: '',
      authLoading: true
    }
  }

  componentDidMount() {
    const {firebase} = this.props;
    const messages = firebase.database().ref('messages/').limitToLast(10);

    messages.on('child_added', snapshot => {
      const veri = snapshot.val();
      this.setState(state => {
        const messages = state.messages.concat(veri);
        return {
          messages,
          input: '',
          loading: false
        }
      })
    })

    const token = localStorage.getItem('googleToken');
    if (token) {
      const credential = firebase.auth.GoogleAuthProvider.credential(null, token);
      firebase.auth().signInAndRetrieveDataWithCredential(credential)
              .then(res => {
                this.setState({
                  loginState: true,
                  name: res.user.displayName,
                  authLoading: false
                })
              })
              .catch(err => this.setState({authLoading:false}))
    } else {
      this.setState({
        authLoading: false
      })
    }

  } /// end of componentDidMount()

  updateInput = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  sendMessage = async (e) => {
    await e.preventDefault();
    const {firebase} = await this.props;
    const refer = await firebase.database().ref('messages');

    try {
      const mesaj = await refer.push({message: this.state.input, username: this.state.name})
      this.setState({
        input : ''
      })
    } catch(err) {
      console.log(err);
      this.setState({
        input: ''
      })
    }
  }

  googleLogin = () => {
    const {firebase} = this.props;
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        const token = result.credential.accessToken;
        const {email} = result.user;


        localStorage.setItem('googleToken', token);
        this.setState({
          loginState : true,
          name : result.user.displayName
        })
      })
      .catch(err => {
        console.log(err);
      })
  }


  render() {
    const messageForm = (
      <Form onSubmit={this.sendMessage}>
          <InputGroup className="pb-3 pt-3">
            <Input className="form-control" onChange={this.updateInput} value={this.state.input} placeholder={this.state.name + " olarak yaziyorsun"} />
          </InputGroup>
          <Button type="submit" className="w-100 bg-info" >Gönder</Button>
      </Form>
    )

    const googleButton = (
      <Button onClick={this.googleLogin} className="w-100 bg-danger"><FaGooglePlusG size={23}/> Google ile Üye Ol</Button>
    )

    const chatMessages = (
      <div>
        {this.state.messages.map((val, index) =>
          <Card key={index} className="p-1 mb-2 mt-2 w-50">
            <CardText><strong>@{val.username}</strong> {val.message}</CardText>
          </Card>
        )}
        {this.state.authLoading ?
          <Spinner className="mx-auto" style={{ width: '3rem', height: '3rem' }} type="grow" />
          : this.state.loginState ?
              messageForm : googleButton }

      </div>
    )

    return (
      <Fragment>
        <Row className="mx-auto d-flex justify-content-center pb-5">
          <Col sm="8">
            <Card className="shadow-lg" body>
              <CardTitle className="card-title text-center">Chat Odasi</CardTitle>
            {this.state.loading ? <Spinner className="mx-auto" style={{ width: '3rem', height: '3rem' }} type="grow" /> : chatMessages}
            </Card>
          </Col>
        </Row>
      </Fragment>
    )
  }
}

export default CardsUst;
