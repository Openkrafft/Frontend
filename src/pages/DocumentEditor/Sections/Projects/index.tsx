import React from 'react'
import { useValues, useActions } from 'kea'
import editorLogic from '../../logic'
import Section from '../SectionWrapper'
import Project from './Project'
import { Project as ProjectType } from '../../types'

const Projects: React.FC = () => {
	const { projects: { projects, projectsTitle } } = useValues(editorLogic)
	const { addProject, updateProjectsTitle, deleteSection } = useActions(
		editorLogic
	)

	const newProject: ProjectType = {
		id: Math.floor(Math.random() * 1e8),
		projectName: '',
		link: '',
		projectDescription: ''
	}

	return (
		<Section
			showSectionTitle
			showAddButton
			sectionTitle={projectsTitle}
			onDeleteClick={() => deleteSection('projects')}
			onAddClick={() => addProject(newProject)}>
			{projects.map((project: ProjectType) => (
				<Project key={project.id} {...project} />
			))}
		</Section>
	)
}

export default Projects
