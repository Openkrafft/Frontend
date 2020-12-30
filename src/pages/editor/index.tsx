import React from 'react'
import { Layout } from 'antd';
import Header from '../../components/Header'
import Sider from '../../components/Sider'
import Canvas from '../../components/Canvas'

import './styles.css'

const { Content } = Layout;

export default class EditorPage extends React.Component {
  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider collapsed={this.state.collapsed} collapsible={false} toggle={this.toggle} />
        <Layout className="site-layout">
          <Header />
          <Content
            className="site-layout-background"
            style={{
              background: '#f0f2f5'
            }}
          >
            <Canvas />
          </Content>
        </Layout>
      </Layout>
    );
  }
}