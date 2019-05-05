import React, {Fragment} from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AboutCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
      <br/>
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          <Card>
            <CardHeader tag="h3">Ben Kimim?</CardHeader>
            <CardBody>
              <CardTitle>Ne Yapiyorum?</CardTitle>
              <CardText>Bos zamanlarimda kod yazmayi seviyorum; bu konuda yeni teknolojileri ogrenmeyi, bunlari uygulamayi ve ozellikle web teknolojilerinin gelisimine tanik olmaktan hoslaniyorum.</CardText>
              <CardText>Egitim hayatinin pratik hayatimda bana herhangi bir katki saglamadigini cok fazla dile getiremesem de; maalesef formal egitimin gunumuz dunyasinda pek bir sey kattigini dusunmuyorum.</CardText>
              <Button onClick={this.toggle} className="btn button-gradient">Egitim Hayatim</Button>

              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Egitim Gecmisim</ModalHeader>

                <ModalBody>
                  Kabataş Erkek Lisesi, <br/>
                  Istanbul Universitesi Hukuk Fakultesi <br/>
                  Detaylar icin: <a target="_blank" href="https://tr.linkedin.com/in/berk-elmas-861350110">Linkedin</a>
                </ModalBody>

                <ModalFooter>
                  <Button color="primary" onClick={this.toggle}>Kapat</Button>{' '}
                </ModalFooter>
              </Modal>

            </CardBody>

          </Card>
        </Col>
      </Row>
      </div>
    );
  }
};

export default AboutCards;
