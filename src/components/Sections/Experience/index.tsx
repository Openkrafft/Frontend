import React, { ChangeEvent } from 'react'
import Section from '../SectionWrapper'
import Role from './Role'
import { v4 as uuidv4 } from 'uuid'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { Experience as ExperienceType, IRole } from 'src/pages/DocumentEditor/types'

interface ExperienceProps {
	toggleDrawer: (
		{ isVisible, section }: { isVisible: boolean; section: string }
	) => void
	deleteSection: (sectionName: string) => void
	addRole: (role: IRole) => void
	updateExperienceTitle: (e: ChangeEvent<HTMLDivElement>) => void
	swapRoles: (srcIndex: number, destinationIndex: number) => void
	updateRole: (role: IRole) => void
	deleteRole: (id: string) => void
	experience: ExperienceType
}

const Experience: React.FC<ExperienceProps> = ({
	toggleDrawer,
	deleteSection,
	addRole,
	updateExperienceTitle,
	swapRoles,
	updateRole,
	deleteRole,
	experience
}) => {
	const newRole = {
		id: `role-${uuidv4()}`,
		jobTitle: '',
		companyName: '',
		date: {
			startDate: '',
			endDate: ''
		},
		stillWorking: false,
		roleDescription: '<li></li>'
	}

	const {sectionTitle, roles} = experience

	return (
		<Section
			showSectionTitle
			showAddButton
			currentSectionId='experience'
			sectionTitle={sectionTitle}
			onChange={(e) => updateExperienceTitle(e.target.value)}
			onAddClick={() => addRole(newRole)}
			onDeleteClick={() => deleteSection('experience')}
			onEditClick={() => toggleDrawer({ isVisible: true, section: 'experience' })}>
			<DragDropContext
				onDragEnd={(param, _) => {
					const srcIndex = param.source.index
					const destinationIndex = param.destination?.index!
					swapRoles(srcIndex, destinationIndex)
				}}>
				<Droppable droppableId={`droppable-experience-section`}>
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
							{Object.values(roles).map((role: any, i) => (
								<Draggable
									key={role.id}
									draggableId={`draggable-role-${role.id}`}
									index={i}>
									{(provided, snapshot) => (
										<div ref={provided.innerRef} {...provided.draggableProps}>
											<Role
												{...role}
												dragProps={{ ...provided.dragHandleProps }}
												isDragging={snapshot.isDragging}
												deleteRole={deleteRole}
												updateRole={updateRole}
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

export default Experience
