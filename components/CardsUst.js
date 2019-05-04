import React, {Fragment} from 'react';
import {Row, Col, Card, CardTitle, CardText, Button,
        InputGroup, Input, InputGroupAddon, Form, FormGroup} from 'reactstrap';

class CardsUst extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messages: [],
      input: ''
    }
  }

  componentDidMount() {
    const {firebase} = this.props;
    const messages = firebase.database().ref('messages/');

    messages.on('value', snapshot => {
      let liste = [];

      Object.keys(snapshot.val()).map(val => {
        let data = {};
        data['id'] = val;
        data['username'] = snapshot.val()[val]['username'];
        data['message'] = snapshot.val()[val]['message'];
        liste.push(data);
      })
      this.setState({
        messages: liste
      })
    })

  }

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
      const mesaj = await refer.push({message: this.state.input, username: "berkelmas"})
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


  render() {
    return (
      <Fragment>
        <Row className="mx-auto d-flex justify-content-center pb-5">
          <Col sm="8">
            <Card body>
              <CardTitle className="card-title text-center">Chat Odasi</CardTitle>
              {this.state.messages.map(val =>
                <Card key={val.id} className="p-1 mb-2 mt-2 w-50">
                  <CardText><strong>@{val.username}</strong> {val.message}</CardText>
                </Card>
              )}
              <Form onSubmit={this.sendMessage}>
                  <InputGroup className="pb-3 pt-3">
                    <Input className="form-control" onChange={this.updateInput} value={this.state.input} placeholder="Canli Chat'e Hosgeldiniz..." />
                  </InputGroup>
                  <Button type="submit" className="w-100 bg-info" >Gönder</Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Fragment>
    )
  }
}

export default CardsUst;
