import React from 'react'
import { useValues, useActions } from 'kea'
import editorLogic from '../../logic'
import { Form, Row, Input } from 'antd'

const summaryPlaceholder =
	'Example: CPA-certified senior accountant with 5 years of experience in financial analysis and consultancy. Coordinated end of the month closing procedures under accordance with GAAP. At SmartFinance Co. implemented quality assurance procedures for accounts payable that resulted in saving $10.000 in a year. Looking to bring my general accounting expertize and experience in managing complex asset accounts to the financial department of ProFinace.'

const HeaderEditor: React.FC = () => {
	const { updateHeader } = useActions(editorLogic)
	const { header: { name, title, summary } } = useValues(editorLogic)
	return (
		<Form layout='vertical' hideRequiredMark>
			<Row gutter={16} style={{ marginLeft: 0 }}>
				<Form.Item name='name' label='Name' initialValue={name}>
					<Input
						placeholder='Write your name'
						style={{ width: 450 }}
						value={name}
						onChange={(e) => updateHeader({ name: e.target.value, title, summary })}
					/>
				</Form.Item>
			</Row>
			<Row gutter={16} style={{ marginLeft: 0 }}>
				<Form.Item name='title' label='Title' initialValue={title}>
					<Input
						placeholder='Example: Senior Accounting Manager'
						style={{ width: 450 }}
						value={title}
						onChange={(e) => updateHeader({ name, title: e.target.value, summary })}
					/>
				</Form.Item>
			</Row>
			<Row gutter={16} style={{ marginLeft: 0 }}>
				<Form.Item name='description' label='Description' initialValue={summary}>
					<Input.TextArea
						rows={9}
						placeholder={summaryPlaceholder}
						style={{ width: 450 }}
						value={summary}
						onChange={(e) => updateHeader({ name, title, summary: e.target.value })}
					/>
				</Form.Item>
			</Row>
		</Form>
	)
}

export default HeaderEditor
