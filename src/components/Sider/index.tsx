import React from 'react'
import { Menu, Layout } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    FormatPainterOutlined,
    LayoutOutlined,
    FileTextOutlined,
    AppstoreOutlined,
    SettingOutlined,
    PlusSquareOutlined,
    FormOutlined,
} from '@ant-design/icons';
import { Logo } from './Sider.styles'
import logo from '../../assets/logo.svg'

const { Sider: SideBar } = Layout;


interface SiderProps {
    collapsible?: boolean,
    collapsed?: boolean,
    toggle?: () => void
}

const Sider: React.FC<SiderProps> = ({ collapsible = true, collapsed, toggle }) => {
    return (
        <SideBar trigger={null} collapsible={collapsible} collapsed={collapsed}>
            <Logo>
                <img src={logo} />
            </Logo>
            <Menu theme='dark' mode="inline">
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
            {
                collapsible && (
                    <div className="sider-collapse-btn">
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                        })}
                    </div>
                )
            }
        </SideBar>
    )
}

export default Sider