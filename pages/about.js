import Head from 'next/head';
import NavbarUst from '../components/NavbarUst';

const About = props => {
  return (
    <div>
      <Head>
        <title>Hakkımda</title>
        <link rel="stylesheet" href="static/css/reactstrap.min.css" />
        <link rel="stylesheet" href="static/css/style.css" />
      </Head>
      <NavbarUst/>
      <p>Hakkımızda Sayfası</p>
    </div>
  )
}

export default About;
