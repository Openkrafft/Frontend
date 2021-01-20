import React from 'react'
import { Form, Row, Input } from 'antd'

const summaryPlaceholder =
	'Example: CPA-certified senior accountant with 5 years of experience in financial analysis and consultancy. Coordinated end of the month closing procedures under accordance with GAAP. At SmartFinance Co. implemented quality assurance procedures for accounts payable that resulted in saving $10.000 in a year. Looking to bring my general accounting expertize and experience in managing complex asset accounts to the financial department of ProFinace.'

const HeaderEditor: React.FC = () => {
	return (
		<Form layout='vertical' hideRequiredMark>
			<Row gutter={16} style={{ marginLeft: 0 }}>
				<Form.Item name='name' label='Name'>
					<Input placeholder='Write your name' style={{ width: 450 }} />
				</Form.Item>
			</Row>
			<Row gutter={16} style={{ marginLeft: 0 }}>
				<Form.Item name='title' label='Title'>
					<Input
						placeholder='Example: Senior Accounting Manager'
						style={{ width: 450 }}
					/>
				</Form.Item>
			</Row>
			<Row gutter={16} style={{ marginLeft: 0 }}>
				<Form.Item name='description' label='Description'>
					<Input.TextArea
						rows={9}
						placeholder={summaryPlaceholder}
						style={{ width: 450 }}
					/>
				</Form.Item>
			</Row>
		</Form>
	)
}

export default HeaderEditor
