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
import { PageHeader } from 'antd';

import './styles.css'

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
          <Menu mode="inline" defaultSelectedKeys={['1']}>
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
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <div>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
            </div>
            <div>
              <Menu mode="horizontal">
                <SubMenu key="SubMenu" icon={<Avatar style={{ backgroundColor: '#87d068', marginRight: 7 }} icon={<UserOutlined />} />} title="Navigation">
                  <Menu.Item key="profile:1" icon={<UserOutlined />}>Profile</Menu.Item>
                  <Menu.Item key="setting:2" icon={<SettingOutlined />}>Account settings</Menu.Item>
                  <Menu.Item key="logout:3" icon={<PoweroffOutlined />}>Logout</Menu.Item>
                </SubMenu>
              </Menu>
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}