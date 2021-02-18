import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';

import AppHeader from './components/common/Header';
import AppHome from './components/pages/Home';
import About from './components/pages/About';

import { Layout } from 'antd';
const { Header, Content } = Layout;


function App() {
  return (
    <>
    <Router>
      <Layout className="mainLayout">
        <Header>
          <AppHeader />
          
        </Header>
        <Content>
          <AppHome />
        </Content>
      </Layout>
    </Router>
    </>
  );
}

export default App;
