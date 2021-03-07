import React, { ChangeEvent } from 'react'
import Section from '../SectionWrapper'
import School from './School'
import { v4 as uuidv4 } from 'uuid'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { EducationSection, School as SchoolType } from 'src/pages/DocumentEditor/types'

interface EducationProps {
	toggleDrawer: ({ isVisible, section }: { isVisible: boolean, section: string }) => void
	education: EducationSection
	addSchool: (newSchool: SchoolType) => void
	updateEducationTitle: (e: ChangeEvent<HTMLDivElement>) => void
	deleteSection: (sectionName: string) => void
	swapSchools: (srcIndex: number, destinationIndex: number) => void
	updateSchool: (school: any) => void
	deleteSchool: (id: string) => void
}

const Education: React.FC<EducationProps> = ({
	education: { educationTitle, schools},
	toggleDrawer,
	addSchool, updateEducationTitle, deleteSection, swapSchools, updateSchool, deleteSchool
}) => {

	const newSchool: SchoolType = {
		id: `school-${uuidv4()}`,
		schoolName: '',
		degree: '',
		date: {
			startDate: '',
			endDate: ''
		},
		description: '',
		hideDescription: false
	}

	return (
		<Section
			currentSectionId='education'
			showSectionTitle
			showAddButton
			sectionTitle={educationTitle}
			onChange={(e) => updateEducationTitle(e.target.value)}
			onDeleteClick={() => deleteSection('education')}
			onAddClick={() => addSchool(newSchool)}
			onEditClick={() => toggleDrawer({ isVisible: true, section: 'education' })}>
			<DragDropContext
				onDragEnd={(param, _) => {
					const srcIndex = param.source.index
					const destinationIndex = param.destination?.index!
					swapSchools(srcIndex, destinationIndex)
				}}>
				<Droppable droppableId={`droppable-education-section`}>
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
							{Object.values(schools).map((school: any, i) => (
								<Draggable
									key={school.id}
									draggableId={`draggable-school-${school.id}`}
									index={i}>
									{(provided, snapshot) => (
										<div ref={provided.innerRef} {...provided.draggableProps}>
											<School
												{...school}
												dragProps={{ ...provided.dragHandleProps }}
												isDragging={snapshot.isDragging}
												updateSchool={updateSchool}
												deleteSchool={deleteSchool}
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

export default Education
