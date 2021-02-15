import React from 'react'
import { useValues, useActions } from 'kea'
import editorLogic from '../../logic'
import Section from '../SectionWrapper'
import Project from './Project'
import { Project as ProjectType } from '../../types'
import { v4 as uuidv4 } from 'uuid'
import globalLogic from 'src/logic'

const Projects: React.FC = () => {
	const { toggleDrawer } = useActions(globalLogic)
	const { projects: { projects, projectsTitle } } = useValues(editorLogic)
	const { addProject, updateProjectsTitle, deleteSection } = useActions(
		editorLogic
	)

	const newProject: ProjectType = {
		id: `project-${uuidv4()}`,
		projectName: '',
		link: '',
		projectDescription: ''
	}

	return (
		<Section
			showSectionTitle
			showAddButton
			sectionTitle={projectsTitle}
			onChange={(e) => updateProjectsTitle(e.target.value)}
			onDeleteClick={() => deleteSection('projects')}
			onAddClick={() => addProject(newProject)}
			onEditClick={() => toggleDrawer({ isVisible: true, section: 'projects' })}>
			{Object.values(projects).map((project: any) => (
				<Project key={project.id} {...project} />
			))}
		</Section>
	)
}

export default Projects
