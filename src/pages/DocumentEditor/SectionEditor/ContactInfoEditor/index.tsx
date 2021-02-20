import React, { useState } from 'react'
import _ from 'lodash'
import { useValues, useActions } from 'kea'
import editorLogic from '../../logic'
import { Select, Row, Col, Input, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Contact } from '../../types'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import {
	LinkedinOutlined,
	GithubOutlined,
	TwitterOutlined,
	MailOutlined,
	EnvironmentOutlined,
	SkypeOutlined,
	PhoneOutlined,
	EditOutlined,
	DeleteOutlined,
	LinkOutlined,
	DragOutlined
} from '@ant-design/icons'

const { Option } = Select

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

const ContactInfoEditor: React.FC = () => {
	const { contacts } = useValues(editorLogic)
	const { deleteContact, addContact, swapContactInfo } = useActions(editorLogic)
	const contactList = [
		'Address',
		'Phone',
		'Linkedin',
		'Email',
		'Skype',
		'Github',
		'Website'
	].filter(
		(contact) => !_.find(contacts, { contactType: contact.toUpperCase() })
	)
	const [ contactDetail, setContentDetail ] = useState('')
	const [ contactOption, setContactOption ] = useState(contactList[0])
	const handleOptionChange = (value: string): void => {
		setContactOption(value)
	}

	return (
		<div style={{ marginBottom: 60 }}>
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
			<DragDropContext onDragEnd={(param, _) => {
					const srcIndex = param.source.index
					const destinationIndex = param.destination?.index
					swapContactInfo(srcIndex, destinationIndex)
				}}>
					<Droppable droppableId={`droppable-contact-section`}>
						{(provided, snapshot) => (
							<div
							    style={
									snapshot.isDraggingOver ? (
									{
										backgroundColor: 'rgba(159, 207, 252, 0.1)',
										border: '1px solid rgba(24, 144, 255, .1)',
										transition: '.1s ease-in-out',
										marginTop: 30
									}
								) : (
									{marginTop: 30}
								)
							} ref={provided.innerRef} {...provided.droppableProps}>
								{contacts.map((contact: Contact, i: number) => {
									return (
										<Draggable
										key={contact.contactType}
										draggableId={`draggable-role-${contact.contactType}`}
										index={i}>
											{(provided, snapshot) => (
												<div ref={provided.innerRef} {...provided.draggableProps}>
													<Row style={
																snapshot.isDragging ? (
																	{
																		backgroundColor: 'rgba(24, 144, 255, .1)',
																		border: '1px dashed rgba(24, 144, 255, .6)',
																		transition: '.1s ease-in-out',
																		marginBottom: 10
																	}
																) : (
																	{marginBottom: 10}
																)
															}>
														<Col>{iconsMap[contact.contactType]}</Col>
														<Col>{contact.contactInfo}</Col>
														<Col style={{ marginLeft: 'auto' }}>
															<EditOutlined style={{ cursor: 'pointer' }} />
															<DeleteOutlined
																style={{ marginLeft: 20, cursor: 'pointer' }}
																onClick={() => deleteContact(contact.contactType)}
															/>
															<DragOutlined style={{ marginLeft: 20 }} { ...provided.dragHandleProps } />
														</Col>
													</Row>
												</div>
											)}
										</Draggable>
									)
								})}
								{provided.placeholder}
							</div>
						)}
					</Droppable>

			</DragDropContext>
		</div>
	)
}

export default ContactInfoEditor
