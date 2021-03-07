import React from 'react'
import Section from '../SectionWrapper'
import {
	LinkedinOutlined,
	GithubOutlined,
	TwitterOutlined,
	MailOutlined,
	EnvironmentOutlined,
	SkypeOutlined,
	PhoneOutlined,
	LinkOutlined
} from '@ant-design/icons'

import { ContactContainer, ContactInformation } from './ContactInfo.styles'
import { Contact } from 'src/pages/DocumentEditor/types'

const iconsMap: any = {
	EMAIL: <MailOutlined style={{ fontSize: 17, marginRight: 8 }} />,
	ADDRESS: <EnvironmentOutlined style={{ fontSize: 17, marginRight: 8 }} />,
	PHONE: <PhoneOutlined style={{ fontSize: 17, marginRight: 8 }} />,
	GITHUB: <GithubOutlined style={{ fontSize: 17, marginRight: 8 }} />,
	LINKEDIN: <LinkedinOutlined style={{ fontSize: 17, marginRight: 8 }} />,
	SKYPE: <SkypeOutlined style={{ fontSize: 17, marginRight: 8 }} />,
	TWITTER: <TwitterOutlined style={{ fontSize: 17, marginRight: 8 }} />,
	WEBSITE: <LinkOutlined style={{ fontSize: 17, marginRight: 8 }} />
}

interface ContactInfoProps {
	contacts: Contact[]
	toggleDrawer: (
		{ isVisible, section }: { isVisible: boolean; section: string }
	) => void
	deleteSection: (sectionName: string) => void
}

const ContactInfo: React.FC<ContactInfoProps> = ({
	contacts,
	toggleDrawer,
	deleteSection
}) => {
	return (
		<Section
			showSectionTitle={false}
			currentSectionId='contactInfo'
			showEditButton
			onDeleteClick={() => deleteSection('contactInfo')}
			onEditClick={() =>
				toggleDrawer({ isVisible: true, section: 'contactInfo' })}>
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
