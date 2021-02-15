import React from 'react'
import { useValues, useActions } from 'kea'
import editorLogic from '../../logic'
import Project from './ProjectEditor'
import { Row, Button } from 'antd'
import globalLogic from 'src/logic'
import { v4 as uuidv4 } from 'uuid'

const ProjectEditor: React.FC = () => {
	const { projects: { projects } } = useValues(editorLogic)
	const { addProject } = useActions(editorLogic)
	const { drawer: { section } } = useValues(globalLogic)

	return (
		<Row>
			{Object.values(projects).map((project: any) => (
				<Project key={project.id} {...project} />
			))}
			{section === 'ALL' && (
				<Button
					type='primary'
					block
					onClick={() =>
						addProject({
							id: `project-${uuidv4()}`,
							projectName: '',
							link: '',
							projectDescription: ''
						})}
					style={{ marginTop: 20 }}>
					Add Project
				</Button>
			)}
		</Row>
	)
}

export default ProjectEditor
