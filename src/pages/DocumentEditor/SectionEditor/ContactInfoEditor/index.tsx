import React, { useState } from 'react'
import _ from 'lodash'
import { useValues, useActions } from 'kea'
import editorLogic from '../../logic'
import { Select, Row, Col, Input, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Contact } from '../../types'
import {
	LinkedinOutlined,
	GithubOutlined,
	TwitterOutlined,
	MailOutlined,
	EnvironmentOutlined,
	SkypeOutlined,
	PhoneOutlined,
	EditOutlined,
	DeleteOutlined
} from '@ant-design/icons'

const { Option } = Select

const iconsMap: any = {
	EMAIL: <MailOutlined style={{ fontSize: 17, marginRight: 8 }} />,
	ADDRESS: <EnvironmentOutlined style={{ fontSize: 17, marginRight: 8 }} />,
	PHONE: <PhoneOutlined style={{ fontSize: 17, marginRight: 8 }} />,
	GITHUB: <GithubOutlined style={{ fontSize: 17, marginRight: 8 }} />,
	LINKEDIN: <LinkedinOutlined style={{ fontSize: 17, marginRight: 8 }} />,
	SKYPE: <SkypeOutlined style={{ fontSize: 17, marginRight: 8 }} />,
	TWITTER: <TwitterOutlined style={{ fontSize: 17, marginRight: 8 }} />
}

const ContactInfoEditor: React.FC = () => {
	const { contacts } = useValues(editorLogic)
	const { deleteContact, addContact } = useActions(editorLogic)
	const contactList = [
		'Address',
		'Phone',
		'Linkedin',
		'Email',
		'Skype',
		'Github'
	].filter(
		(contact) => !_.find(contacts, { contactType: contact.toUpperCase() })
	)
	const [ contactDetail, setContentDetail ] = useState('')
	const [ contactOption, setContactOption ] = useState(contactList[0])
	const handleOptionChange = (value: string): void => {
		setContactOption(value)
	}

	return (
		<React.Fragment>
			<Row>
				<Col>
					<Select
						showSearch
						placeholder='Select a contact'
						optionFilterProp='children'
						value={contactOption || contactList[0]}
						onChange={handleOptionChange}
						disabled={!contactList.length}
						style={{ width: 150 }}>
						{contactList.map((contact) => (
							<Option key={contact} value={contact}>
								{contact}
							</Option>
						))}
					</Select>
				</Col>
				<Col>
					<Input
						style={{ width: 294, margin: '0 10px 0 3px' }}
						disabled={!contactList.length}
						value={contactDetail}
						onChange={(e) => setContentDetail(e.target.value)}
					/>
				</Col>
				<Col>
					<Button
						disabled={!contactList.length || !contactDetail.length}
						icon={<PlusOutlined />}
						onClick={() => {
							addContact({
								contactType: !contactOption
									? contactList[0].toUpperCase()
									: contactOption.toUpperCase(),
								contactInfo: contactDetail
							})
							setContactOption('')
							setContentDetail('')
						}}>
						Add
					</Button>
				</Col>
			</Row>
			<div style={{ marginTop: 30 }}>
				{contacts.map((contact: Contact) => {
					return (
						<Row key={contact.contactType} style={{ marginBottom: 20 }}>
							<Col>{iconsMap[contact.contactType]}</Col>
							<Col>{contact.contactInfo}</Col>
							<Col style={{ marginLeft: 'auto' }}>
								<EditOutlined style={{ cursor: 'pointer' }} />
								<DeleteOutlined
									style={{ marginLeft: 20, cursor: 'pointer' }}
									onClick={() => deleteContact(contact.contactType)}
								/>
							</Col>
						</Row>
					)
				})}
			</div>
		</React.Fragment>
	)
}

export default ContactInfoEditor
