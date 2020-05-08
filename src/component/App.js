import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ImageView from './ImageView.js'
import Head from './Head.js'
import {Layout, Menu, Breadcrumb, Form, Upload} from 'antd'
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

// {/*<HeaderBar />
// <ImageView />*/}

class App extends React.Component{
    render(){
        return(
            <div className="App">

              <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                  <div className="logo" />
                  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                  </Menu>
                </Header>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                  <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    <ImageView />
                  </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Not Pot ©2020 Created by James Robinson</Footer>
              </Layout>

            </div>
        )
    }
}

export default App;
