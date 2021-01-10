import React from 'react'
import { useValues } from 'kea'
import globalLogic from '../../../logic'
import Header from '../Sections/Header'
import ContactInfo from '../Sections/ContactInfo'
import Skills from '../Sections/Skills'
import Experience from '../Sections/Experience'

import { Document as PageContainer } from './Document.styles'

import './styles.css'

const Document: React.FC = () => {
	const { zoom } = useValues(globalLogic)
	return (
		<PageContainer id='resume-content' style={{ zoom: `${zoom}%` }}>
			<Header />
			<ContactInfo />
			<Skills />
			<Experience />
		</PageContainer>
	)
}

export default Document
