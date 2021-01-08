import React, { useState } from 'react'
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

const contactInfo: any = [
	{
		infoType: 'email',
		infoContent: 'username@gmail.com'
	},
	{
		infoType: 'address',
		infoContent: 'Berlin, Germany'
	},
	{
		infoType: 'phone',
		infoContent: '(+216) 20-555-999'
	},
	{
		infoType: 'github',
		infoContent: 'www.github.com/username'
	},
	{
		infoType: 'skype',
		infoContent: 'user.name'
	},
	{
		infoType: 'twitter',
		infoContent: '@username'
	},
	{
		infoType: 'linkedin',
		infoContent: 'www.linkedin.com/username'
	}
]

const iconsMap: any = {
	email: <MailOutlined style={{ fontSize: 17, marginRight: 8 }} />,
	address: <EnvironmentOutlined style={{ fontSize: 17, marginRight: 8 }} />,
	phone: <PhoneOutlined style={{ fontSize: 17, marginRight: 8 }} />,
	github: <GithubOutlined style={{ fontSize: 17, marginRight: 8 }} />,
	linkedin: <LinkedinOutlined style={{ fontSize: 17, marginRight: 8 }} />,
	skype: <SkypeOutlined style={{ fontSize: 17, marginRight: 8 }} />,
	twitter: <TwitterOutlined style={{ fontSize: 17, marginRight: 8 }} />
}

const ContactInfo: React.FC = () => {
	const [ isVisible, setVisibility ] = useState<boolean>(false)
	return (
		<ContactContainer
			onMouseOver={() => setVisibility(true)}
			onMouseLeave={() => setVisibility(false)}>
			<EditContactInfo style={{ display: isVisible ? 'block' : 'none' }}>
				<EditOutlined />
			</EditContactInfo>
			{contactInfo.map((info: any) => (
				<ContactInformation key={info.infoType}>
					<span>{iconsMap[info.infoType]}</span>
					<p style={{ fontSize: 12 }}>{info.infoContent}</p>
				</ContactInformation>
			))}
		</ContactContainer>
	)
}

export default ContactInfo
