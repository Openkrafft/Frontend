import React, { FC, ReactNode } from 'react';
import { Drawer as DrawerContainer } from 'antd';

interface DrawerProps {
    children?: ReactNode
}

const Drawer: FC<DrawerProps> = (props) => <DrawerContainer {...props} >{props.children}</DrawerContainer>

export default Drawer