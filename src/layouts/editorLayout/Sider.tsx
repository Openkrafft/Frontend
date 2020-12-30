import React from 'react'
import { Layout, Menu } from 'antd';
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

const { Sider } = Layout;

interface SiderProps {
    collapsed?: boolean,
}

const SideMenu: React.FC<SiderProps> = props => {
    return (
        <Sider {...props} trigger={null} collapsible collapsed={props.collapsed}>
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
      </Sider>
    )
}

export default SideMenu