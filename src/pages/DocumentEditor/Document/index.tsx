import React from 'react'
import { useValues } from 'kea'
import globalLogic from '../../../logic'
import editorLogic from '../logic'
import Header from '../Sections/Header'
import ContactInfo from '../Sections/ContactInfo'
import Skills from '../Sections/Skills'
import Experience from '../Sections/Experience'
import List from '../Sections/List'
import Text from '../Sections/Text'
import Education from '../Sections/Education'

import { Document as PageContainer } from './Document.styles'

import './styles.css'

const Document: React.FC = () => {
	const { zoom } = useValues(globalLogic)
	const { sections: currentSections } = useValues(editorLogic)
	const sections: any = {
		contactInfo: <ContactInfo />,
		skills: <Skills />,
		experience: <Experience />,
		portfolio: <Portfolio />,
		list: <List />,
		text: <Text />,
		education: <Education />
	}
	return (
		<PageContainer id='resume-content' style={{ zoom: `${zoom}%` }}>
			<Header />
			{currentSections.map((section: string) => (
				<div key={section}>{sections[section]}</div>
			))}
		</PageContainer>
	)
}

const Portfolio = () => <div>Portfolio</div>

export default Document
