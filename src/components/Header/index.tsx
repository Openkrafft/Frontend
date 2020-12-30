import React, { FC } from 'react'
import { Layout, Menu, Button, Badge } from 'antd';
import { Avatar } from 'antd';
import {
  UserOutlined,
  SettingOutlined,
  PoweroffOutlined,
  DownloadOutlined,
  BellOutlined
} from '@ant-design/icons';

import { UserInfo, NotificationBell } from './Header.styles'
import './styles.css'

const { Header } = Layout;
const { SubMenu } = Menu;

const PageHeader: FC = () => {
    return (
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <UserInfo>
          <Menu mode="horizontal">
            <SubMenu key="SubMenu" icon={<Avatar style={{ backgroundColor: '#87d068', marginRight: 7 }} icon={<UserOutlined />} />} title="Mohamed Ali">
              <Menu.Item key="profile:1" icon={<UserOutlined />}>Profile</Menu.Item>
              <Menu.Item key="setting:2" icon={<SettingOutlined />}>Account settings</Menu.Item>
              <Menu.Item key="logout:3" icon={<PoweroffOutlined />}>Logout</Menu.Item>
            </SubMenu>
          </Menu>
          <NotificationBell>
            <Badge count={25} style={{
                position: 'relative',
                left: '35px',
                bottom: '15px'
              }}
            />
            <BellOutlined style={{ fontSize: 16 }} />
          </NotificationBell>
          <Button type="primary" icon={<DownloadOutlined />} style={{ marginRight: 10 }}>
            Download
          </Button>
        </UserInfo>
      </Header>
    )
}

export default PageHeader