import React, { ChangeEvent } from 'react'
import Section from '../SectionWrapper'
import Project from './Project'
import { Project as ProjectType, Projects as ProjectsType } from '../../../pages/DocumentEditor/types'
import { v4 as uuidv4 } from 'uuid'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

interface ProjectsProps {
	addProject: (project: ProjectType) => void
	updateProjectsTitle: (e: ChangeEvent<HTMLDivElement>) => void
	deleteSection: (sectionName: string) => void
	swapProjects: (srcIndex: number, destinationIndex: number) => void
	toggleDrawer: (
		{ isVisible, section }: { isVisible: boolean; section: string }
	) => void
	updateProject: (project: ProjectType) => void
	deleteProject: (id: string) => void
	projects: ProjectsType
}

const Projects: React.FC<ProjectsProps> = ({
	addProject,
	updateProjectsTitle,
	deleteSection,
	swapProjects,
	toggleDrawer,
	updateProject,
	deleteProject,
	projects
}) => {
	const { projects: projectsList, projectsTitle } = projects

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
			currentSectionId='projects'
			sectionTitle={projectsTitle}
			onChange={(e) => updateProjectsTitle(e.target.value)}
			onDeleteClick={() => deleteSection('projects')}
			onAddClick={() => addProject(newProject)}
			onEditClick={() => toggleDrawer({ isVisible: true, section: 'projects' })}>
			<DragDropContext
				onDragEnd={(param, _) => {
					const srcIndex = param.source.index
					const destinationIndex = param.destination?.index!
					swapProjects(srcIndex, destinationIndex)
				}}>
				<Droppable droppableId={`droppable-projects-section`}>
					{(provided, snapshot) => (
						<div
							ref={provided.innerRef}
							style={
								snapshot.isDraggingOver ? (
									{
										backgroundColor: 'rgba(159, 207, 252, 0.1)',
										border: '1px solid rgba(24, 144, 255, .1)',
										transition: '.1s ease-in-out'
									}
								) : (
									{}
								)
							}
							{...provided.droppableProps}>
							{Object.values(projectsList).map((project: any, i) => (
								<Draggable
									key={project.id}
									draggableId={`draggable-project-${project.id}`}
									index={i}>
									{(provided, snapshot) => (
										<div ref={provided.innerRef} {...provided.draggableProps}>
											<Project
												{...project}
												dragProps={{ ...provided.dragHandleProps }}
												isDragging={snapshot.isDragging}
												updateProject={updateProject}
												deleteProject={deleteProject}
											/>
										</div>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</Section>
	)
}

export default Projects
