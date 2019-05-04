import React from "react";

import "../css/reactstrap.min.css";
import "../css/style.css";

import NavbarUst from '../components/NavbarUst';
import JumbotronUst from '../components/JumbotronUst';

class Home extends React.Component {
  render() {
    return (
      <div>
        <NavbarUst/>
        <JumbotronUst/>
      </div>
    );
  }
}

export default Home;
