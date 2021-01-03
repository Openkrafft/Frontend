import React from 'react'
import { Layout } from 'antd';
import AppHeader from '../AppHeader/index'
import Sider from './Sider'
import Document from '../../components/Document'
import ZoomButtons from '../../components/ZoomButtons'

import '../styles.css'

const { Content } = Layout;

export default class TemplateCreator extends React.Component {
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
          <AppHeader hideLogo={true} />
          <Content
            className="site-layout-background"
            style={{
              background: '#f0f2f5',
              padding: '80px 0'
            }}
          >
            <ZoomButtons />
            <Document />
          </Content>
        </Layout>
      </Layout>
    );
  }
}