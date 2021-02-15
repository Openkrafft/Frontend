import React from 'react'
import { useValues, useActions } from 'kea'
import editorLogic from '../../logic'
import School from './SchoolEditor'
import { Row, Button } from 'antd'
import globalLogic from 'src/logic'
import { v4 as uuidv4 } from 'uuid'

const EducationEditor: React.FC = () => {
	const { education: { schools } } = useValues(editorLogic)
	const { addSchool } = useActions(editorLogic)
	const { drawer: { section } } = useValues(globalLogic)

	return (
		<Row style={{ marginBottom: 60 }}>
			{Object.values(schools).map((school: any) => (
				<School key={school.id} {...school} />
			))}
			{section === 'ALL' && (
				<Button
					type='primary'
					block
					onClick={() =>
						addSchool({
							id: `school-${uuidv4()}`,
							schoolName: '',
							degree: '',
							date: {
								startDate: '',
								endDate: ''
							},
							description: '',
							hideDescription: false
						})}
					style={{ marginTop: 20 }}>
					Add School
				</Button>
			)}
		</Row>
	)
}

export default EducationEditor
