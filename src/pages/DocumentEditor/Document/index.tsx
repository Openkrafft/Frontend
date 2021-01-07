import React from 'react'
import Header from '../Sections/Header'
import ContactInfo from '../Sections/ContactInfo'
import Skills from '../Sections/Skills'
import Experience from '../Sections/Experience'

import { Document as PageContainer } from './Document.styles'

const Document: React.FC = () => {
	return (
		<PageContainer id='resume-content'>
			<Header />
			<ContactInfo />
			<Skills />
			<Experience />
		</PageContainer>
	)
}

export default Document
