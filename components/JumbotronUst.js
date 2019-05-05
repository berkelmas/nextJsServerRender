import React from 'react';
import Link from 'next/link';
import { Jumbotron, Button, Fade, Collapse, CardBody, Card } from 'reactstrap';

class JumbotronUst extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <div>
        <Jumbotron className="mt-3">
          <h1 className="display-3">Portfolyo</h1>
          <p className="lead">Berk Elmas'ın güncel web teknolojilerini takip etmek ve kullanmak amacı ile geliştirien Web Sitesidir.</p>
          <hr className="my-2" />
          <p>Berk Elmas tarafından yeni teknolojilerin kullanılması ve kişisel gelişim için tasarlanan bu web sitesinde; hangi güncel teknolojilerin kullanıldığını görebilirsiniz.</p>
          <p className="lead">
            <Button className="mt-3" onClick={this.toggle} color="info">Bu Site Neden Var?</Button>
          </p>
          <Collapse isOpen={this.state.collapse}>
            <Card className="card-background">
              <CardBody>
                <p className="lead">Portfolyo<br/> Bu web sitesinde modern JavaScript kutuphanelerinden mumkun oldugu kadar faydalanarak hem kendi front end bilgimi gelistirmeye calistim ve yalin bir calisma oldugunu dusunuyorum. Kullanilan teknolojiler icin detayli bilgiye <strong>buraya</strong> tiklayarak ulasabilirsiniz.</p>
              </CardBody>
            </Card>
          </Collapse>
        </Jumbotron>
      </div>
    );
  }
};

export default JumbotronUst;
