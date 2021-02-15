import React from 'react'
import { useValues, useActions } from 'kea'
import editorLogic from '../../logic'
import { Form, Row, Input } from 'antd'

type TextEditorProps = {
	id?: string
}

const TextEditor: React.FC<TextEditorProps> = ({ id }) => {
	const { updateTextTitle, updateTextContent } = useActions(editorLogic)
	const { textSection } = useValues(editorLogic)
	const title = textSection[id!].textTitle
	const textContent = textSection[id!].textContent

	return (
		<Form layout='vertical' style={{ marginBottom: 40 }}>
			<Row gutter={16} style={{ marginLeft: 0 }}>
				<Form.Item name='text-title' label='Section Title' initialValue={title}>
					<Input
						placeholder='Write section title'
						style={{ width: 450 }}
						value={title}
						onChange={(e) => updateTextTitle(e.target.value, id)}
					/>
				</Form.Item>
			</Row>
			<Row gutter={16} style={{ marginLeft: 0 }}>
				<Form.Item
					name='text-content'
					label='Text Content'
					initialValue={textContent}>
					<Input.TextArea
						rows={9}
						placeholder='Add text here'
						style={{ width: 450 }}
						value={textContent}
						onChange={(e) => updateTextContent(e.target.value, id)}
					/>
				</Form.Item>
			</Row>
		</Form>
	)
}

export default TextEditor
