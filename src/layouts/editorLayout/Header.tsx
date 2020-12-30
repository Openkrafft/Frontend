import React from 'react'
import { Layout, Menu } from 'antd';
import { Avatar } from 'antd';
import {
  UserOutlined,
  SettingOutlined,
  PoweroffOutlined
} from '@ant-design/icons';

const { Header } = Layout;
const { SubMenu } = Menu;

const PageHeader: React.FC = (props) => {
    return (
        <Header className="site-layout-background" style={{ padding: 0 }}>
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
    )
}

export default PageHeader