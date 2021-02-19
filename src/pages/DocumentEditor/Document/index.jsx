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
import Projects from '../Sections/Projects'
import { useResizeDetector } from 'react-resize-detector'

import { Document as PageContainer } from './Document.styles'

import './styles.css'

const Document = () => {
	const { ref: docRef } = useResizeDetector()
	const { zoom } = useValues(globalLogic)
	const { skills, list, textSection, sections: currentSections } = useValues(
		editorLogic
	)
	const sections = {
		contactInfo : <ContactInfo />,
		experience  : <Experience />,
		education   : <Education />,
		projects    : <Projects />
	}

	return (
		<PageContainer id='resume-content' style={{ zoom: `${zoom}%` }} ref={docRef}>
			<Header />
			{currentSections.map((section) => (
				<div key={section} style={{ marginBottom: 10 }}>
					{/skills/.test(section) ? (
						<Skills id={section} skills={skills[section]} />
					) : /list/.test(section) ? (
						<List id={section} list={list[section]} />
					) : /text/.test(section) ? (
						<Text id={section} textSection={textSection[section]} />
					) : (
						sections[section]
					)}
				</div>
			))}
		</PageContainer>
	)
}

export default Document
