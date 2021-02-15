import React, { useState } from 'react'
import { useValues, useActions } from 'kea'
import editorLogic from '../../logic'
import { Form, Row, Input, Button, Col } from 'antd'
import { extractTextFromHTML } from '../../../../utils'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'

type ListEditorProps = {
	id?: string
}

const ListEditor: React.FC<ListEditorProps> = ({ id }) => {
	const { list } = useValues(editorLogic)
	const { addListContent, removeListContent } = useActions(editorLogic)
	const currentlistContent = extractTextFromHTML(list[id!].listContent)
	const [ listContent, setListContent ] = useState('')

	return (
		<Form layout='vertical' hideRequiredMark style={{ marginBottom: 50 }}>
			<Row gutter={16} style={{ paddingLeft: 0 }}>
				<Col>
					<Input
						style={{ width: 450, marginBottom: 10 }}
						value={listContent}
						onChange={(e) => setListContent(e.target.value)}
						onPressEnter={() => {
							if (listContent) {
								addListContent(listContent, id)
								setListContent('')
							}
						}}
					/>
				</Col>
				<Col style={{ paddingLeft: 0 }}>
					<Button
						icon={<PlusOutlined />}
						onClick={() => {
							if (listContent) {
								addListContent(listContent, id)
								setListContent('')
							}
						}}>
						Add
					</Button>
				</Col>
			</Row>
			<Row gutter={20} style={{ marginLeft: 0, display: 'block', marginTop: 10 }}>
				{currentlistContent.length ? (
					currentlistContent.map((listContent: string, index: number) => (
						<div
							key={`list#${index}`}
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center'
							}}>
							<li
								style={{ listStyleType: 'disc', margin: '5px 0' }}
								key={`skill#${index}`}>
								{listContent}
							</li>
							<DeleteOutlined
								style={{ cursor: 'pointer' }}
								onClick={() => removeListContent(listContent, id)}
							/>
						</div>
					))
				) : (
					<p>List is Empty</p>
				)}
			</Row>
		</Form>
	)
}

export default ListEditor
