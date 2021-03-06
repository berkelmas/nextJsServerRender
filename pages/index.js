import React from "react";

import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/auth';

import Head from 'next/head';

import NavbarUst from '../components/NavbarUst';
import JumbotronUst from '../components/JumbotronUst';
import CardUst from '../components/CardsUst';

class Home extends React.Component {

  componentWillMount() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyCjMduL-cfm11xatgCBYXbZ9YsivejE4Xw",
      authDomain: "reactauthdeneme.firebaseapp.com",
      databaseURL: "https://reactauthdeneme.firebaseio.com",
      projectId: "reactauthdeneme",
      storageBucket: "reactauthdeneme.appspot.com",
      messagingSenderId: "627494375899",
      appId: "1:627494375899:web:ea280f5712603c51"
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
       firebase.initializeApp(firebaseConfig);
       console.log("Firebase Baglantisi Basarili...")
    }
  }

  render() {
    return (
      <div>
        <Head>
          <title>Berk Elmas</title>
          <link rel="stylesheet" href="static/css/reactstrap.min.css" />
          <link rel="stylesheet" href="static/css/style.css" />
        </Head>
        <NavbarUst/>
        <JumbotronUst/>
        <CardUst firebase={firebase}/>
      </div>
    );
  }
}

export default Home;
