import React from 'react'
import { Layout, Menu } from 'antd';
import { Avatar } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  FormatPainterOutlined,
  LayoutOutlined,
  FileTextOutlined,
  AppstoreOutlined,
  SettingOutlined,
  PlusSquareOutlined,
  FormOutlined,
  PoweroffOutlined
} from '@ant-design/icons';
import PageHeader from './Header'

import '../styles.css'

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;


export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          {/* <div className="logo"><UserOutlined /></div> */}
          <Menu mode="inline">
            <Menu.Item key="1" icon={<PlusSquareOutlined />}>
              Create Template
            </Menu.Item>
            <Menu.Item key="2" icon={<FormatPainterOutlined />}>
              Appearance
            </Menu.Item>
            <Menu.Item key="3" icon={<LayoutOutlined />}>
              Page Layout
            </Menu.Item>
            <Menu.Item key="4" icon={<FormOutlined />}>
              Edit Content
            </Menu.Item>
            <Menu.Item key="5" icon={<FileTextOutlined />}>
              Use Sample Content
            </Menu.Item>
            <Menu.Item key="6" icon={<AppstoreOutlined />}>
              Change Template
            </Menu.Item>
            <Menu.Item key="7" icon={<SettingOutlined />}>
              Settings
            </Menu.Item>
          </Menu>
          <div className="sider-collapse-btn">
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </div>
        </Sider>
        <Layout className="site-layout">
          <PageHeader />
          <Content
            className="site-layout-background"
            style={{
              background: '#f0f2f5'
            }}
          >
            <div>Hello</div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}