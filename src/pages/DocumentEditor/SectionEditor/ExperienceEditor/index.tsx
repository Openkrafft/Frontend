import React from 'react'
import { useActions, useValues } from 'kea'
import editorLogic from '../../logic'
import Role from './RoleEditor'
import { Row, Button } from 'antd'
import { v4 as uuidv4 } from 'uuid'
import globalLogic from 'src/logic'

const ExperienceEditor: React.FC = () => {
	const { experience: { roles } } = useValues(editorLogic)
	const { addRole } = useActions(editorLogic)
	const { drawer: { section } } = useValues(globalLogic)

	return (
		<Row style={{ marginBottom: 50 }}>
			{Object.values(roles).map((role: any) => <Role key={role.id} {...role} />)}
			{section === 'ALL' && (
				<Button
					type='primary'
					block
					onClick={() =>
						addRole({
							id: `role-${uuidv4()}`,
							jobTitle: '',
							companyName: '',
							date: {
								startDate: '',
								endDate: ''
							},
							roleDescription: '<li></li>'
						})}
					style={{ marginTop: 20 }}>
					Add Role
				</Button>
			)}
		</Row>
	)
}

export default ExperienceEditor
