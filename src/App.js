import React, { Component } from 'react';
import './App.css';
import Form from './containers/Form';
import Layout from './components/Layout/Layout'

class App extends Component {
  render() {
    return (
      <Layout>
      <Form />

      </Layout>
    );
  }
}

export default App;
