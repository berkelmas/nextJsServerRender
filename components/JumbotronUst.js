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
        <Jumbotron className="mb-n3 mt-3">
          <h1 className="display-3">Portfolyo</h1>
          <p className="lead">Berk Elmas'ın güncel web teknolojilerini takip etmek ve kullanmak amacı ile geliştirien Web Sitesidir.</p>
          <hr className="my-2" />
          <p>Berk Elmas tarafından yeni teknolojilerin kullanılması ve kişisel gelişim için tasarlanan bu web sitesinde; hangi güncel teknolojilerin kullanıldığını görebilirsiniz.</p>
          <p className="lead">
            <Button onClick={this.toggle} color="info">Berk Elmas Kimdir?</Button>
          </p>
          <Link href="/about?name=berk" as="/about/berk"><a className="btn btn-info">berk</a></Link>
          <Collapse isOpen={this.state.collapse}>
            <Card className="card-background">
              <CardBody>
                kdnaslk djasbdjkas jdnaskdnas  njkdnas kjasn ndjkasn jkasn jkdasn jkasndjknasjk ndasjk nasjk nn jkasnd jkasn jksandjk nasjk ndasjk nasjk nkjsanjk njka njkdan asjknsjkadnjksan kdjk asnkjasdn jkasn kjdnsa nkasjn jkdasn jkasndjk asnn asjk ndjaksn jkdasn jkasnd k
              </CardBody>
            </Card>
          </Collapse>
        </Jumbotron>
      </div>
    );
  }
};

export default JumbotronUst;
