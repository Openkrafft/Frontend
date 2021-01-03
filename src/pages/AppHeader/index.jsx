import React from 'react'
import html2pdf from 'html2pdf.js'
import { Layout, Menu, Button } from 'antd';
import { Avatar } from 'antd';
import {
  UserOutlined,
  SettingOutlined,
  PoweroffOutlined,
  DownloadOutlined,
  ShareAltOutlined
} from '@ant-design/icons';

import { UserInfo, Logo } from './Header.styles'

import logo from '../../assets/logo.svg'

import './styles.css'

const { Header } = Layout;
const { SubMenu } = Menu;

export default class PageHeader extends React.Component {
  printDocument = () => {
    const resume = document.getElementById('resume-content')
    html2pdf().from(resume).toPdf().save('my-resume')
  }

  render()  {
    return (
      <Header className="site-layout-background" style={{ padding: 0 }}>
        {!this.props.hideLogo && <Logo><img src={logo} height='28' /></Logo>}
        <UserInfo>
          <Menu mode="horizontal">
            <SubMenu key="SubMenu" icon={<Avatar style={{ backgroundColor: '#87d068', marginRight: 7 }} icon={<UserOutlined />} />} title="Mohamed Ali">
              <Menu.Item key="profile:1" icon={<UserOutlined />}>Profile</Menu.Item>
              <Menu.Item key="setting:2" icon={<SettingOutlined />}>Account settings</Menu.Item>
              <Menu.Item key="logout:3" icon={<PoweroffOutlined />}>Logout</Menu.Item>
            </SubMenu>
          </Menu>
          <Button type="primary" icon={<DownloadOutlined />} style={{ marginRight: 10 }} onClick={this.printDocument}>
            Download
          </Button>
          <Button icon={<ShareAltOutlined />} style={{ marginRight: 10 }}>
            Share
          </Button>
        </UserInfo>
      </Header>
    )
  }
}