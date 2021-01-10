import React, { useState } from 'react'
import { useValues, useActions } from 'kea'
import editorLogic from '../../logic'
import { Contact, ContactType } from '../../types'
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

import {
	ContactContainer,
	ContactInformation,
	EditContactInfo
} from './ContactInfo.styles'

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
	const { addContact, updateContact } = useActions(editorLogic)
	const [ isVisible, setVisibility ] = useState<boolean>(false)
	return (
		<ContactContainer
			onMouseOver={() => setVisibility(true)}
			onMouseLeave={() => setVisibility(false)}>
			<EditContactInfo style={{ display: isVisible ? 'block' : 'none' }}>
				<EditOutlined />
			</EditContactInfo>
			{contacts.map((contact: Contact) => (
				<ContactInformation key={contact.contactType}>
					<span>{iconsMap[contact.contactType]}</span>
					<p style={{ fontSize: 12 }}>{contact.contactInfo}</p>
				</ContactInformation>
			))}
		</ContactContainer>
	)
}

export default ContactInfo
