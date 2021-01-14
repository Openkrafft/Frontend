import React, { useState } from 'react'
import { useValues, useActions } from 'kea'
import editorLogic from '../../logic'
import Section from '../SectionWrapper'
import { Contact } from '../../types'
import {
	LinkedinOutlined,
	GithubOutlined,
	TwitterOutlined,
	MailOutlined,
	EnvironmentOutlined,
	SkypeOutlined,
	PhoneOutlined,
	EditOutlined
} from '@ant-design/icons'

import { ContactContainer, ContactInformation } from './ContactInfo.styles'

const iconsMap: any = {
	EMAIL: <MailOutlined style={{ fontSize: 17, marginRight: 8 }} />,
	ADDRESS: <EnvironmentOutlined style={{ fontSize: 17, marginRight: 8 }} />,
	PHONE: <PhoneOutlined style={{ fontSize: 17, marginRight: 8 }} />,
	GITHUB: <GithubOutlined style={{ fontSize: 17, marginRight: 8 }} />,
	LINKEDIN: <LinkedinOutlined style={{ fontSize: 17, marginRight: 8 }} />,
	SKYPE: <SkypeOutlined style={{ fontSize: 17, marginRight: 8 }} />,
	TWITTER: <TwitterOutlined style={{ fontSize: 17, marginRight: 8 }} />
}

const ContactInfo: React.FC = () => {
	const { contacts } = useValues(editorLogic)
	const { addContact, updateContact, deleteSection } = useActions(editorLogic)
	return (
		<Section
			showSectionTitle={false}
			showAddButton
			onDeleteClick={() => deleteSection('contactInfo')}>
			<ContactContainer>
				{contacts.map((contact: Contact) => (
					<ContactInformation key={contact.contactType}>
						<span>{iconsMap[contact.contactType]}</span>
						<p style={{ fontSize: 12 }}>{contact.contactInfo}</p>
					</ContactInformation>
				))}
			</ContactContainer>
		</Section>
	)
}

export default ContactInfo
