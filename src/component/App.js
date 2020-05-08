import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ImageView from './ImageView.js'
import Head from './Head.js'
import MyContent from './MyContent.js'
import Foot from './Foot.js'
import {Layout, Menu, Breadcrumb, Form, Upload} from 'antd'
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

class App extends React.Component{
    render(){
        return(
            <div className="App">

              <Layout style={{height: '100%'}}>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' , background: "green", color: "white"}}>
                  <div className="logo" />
                  <Head />
                </Header>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                  <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    <MyContent />
                  </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                  <Foot />
                </Footer>
              </Layout>

            </div>
        )
    }
}

export default App;
