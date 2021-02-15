import React from 'react'
import { Layout } from 'antd'
import AppHeader from '../AppHeader/index'
import Document from './Document/index'
import ZoomButtons from '../../components/ZoomButtons'
import ToolBar from './ToolBar'
import SectionEditor from './SectionEditor'

import '../styles.css'

const { Content } = Layout

export default class EditorPage extends React.Component {
	state = {
		collapsed: true
	}

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed
		})
	}

	render() {
		return (
			<React.Fragment>
				<SectionEditor />
				<Layout>
					<Layout className='site-layout'>
						<AppHeader />
						<Content
							className='site-layout-background'
							style={{
								background: '#f0f2f5',
								padding: '80px 0'
							}}>
							<ZoomButtons />
							<Document />
							<ToolBar />
						</Content>
					</Layout>
				</Layout>
			</React.Fragment>
		)
	}
}
