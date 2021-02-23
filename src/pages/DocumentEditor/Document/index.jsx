import React from 'react'
import { useValues, useActions } from 'kea'
import globalLogic from '../../../logic'
import editorLogic from '../logic'
import Header from '../Sections/Header'
import ContactInfo from '../Sections/ContactInfo'
import Skills from '../Sections/Skills'
import Experience from '../Sections/Experience'
import List from '../Sections/List'
import Text from '../Sections/Text'
import Education from '../Sections/Education'
import Projects from '../Sections/Projects'
import { useResizeDetector } from 'react-resize-detector'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { Document as PageContainer } from './Document.styles'

import './styles.css'

const Document = () => {
	const { ref: docRef } = useResizeDetector()
	const { zoom } = useValues(globalLogic)
	const {swapSections} = useActions(editorLogic)
	const { skills, list, textSection, sections: currentSections } = useValues(
		editorLogic
	)

	const Sections = ({ dragSectionProps, sectionName }) => {
		const sections = {
			contactInfo : <ContactInfo dragSectionProps={dragSectionProps} />,
			experience  : <Experience dragSectionProps={dragSectionProps} />,
			education   : <Education dragSectionProps={dragSectionProps} />,
			projects    : <Projects dragSectionProps={dragSectionProps} />
		}

		return sections[sectionName]
	}

	console.log('sections', currentSections)

	return (
		<PageContainer id='resume-content' style={{ zoom: `${zoom}%` }} ref={docRef}>
			<Header />
			<DragDropContext onDragEnd={(param, _) => {
					const srcIndex = param.source.index
					const destinationIndex = param.destination?.index
					swapSections(srcIndex, destinationIndex)
				}}>
				<Droppable droppableId={`droppable-document-section`}>
					{(provided, snapshot) => (
						<div
							style={
								snapshot.isDraggingOver ? (
									{
										backgroundColor : 'rgba(159, 207, 252, 0.1)',
										border          : '1px solid rgba(24, 144, 255, .1)',
										transition      : '.1s ease-in-out',
										marginTop       : 30
									}
								) : (
									{ marginTop: 30 }
								)
							}
							ref={provided.innerRef}
							{...provided.droppableProps}>
							{currentSections.map((section, i) => (
								<Draggable key={section} draggableId={`draggable-main-section-${section}`} index={i}>
									{(provided, snapshot) => (
										<div
											style={{ marginBottom: 10 }}
											ref={provided.innerRef}
											{...provided.draggableProps}>
											<div
												style={
													snapshot.isDragging ? (
														{
															backgroundColor : 'rgba(24, 144, 255, .1)',
															border          : '1px dashed rgba(24, 144, 255, .6)',
															transition      : '.1s ease-in-out',
															marginBottom    : 10
														}
													) : (
														{ marginBottom: 10 }
													)
												}>
												{/skills/.test(section) ? (
													<Skills
														dragSectionProps={{ ...provided.dragHandleProps }}
														id={section}
														skills={skills[section]}
													/>
												) : /list/.test(section) ? (
													<List
														dragSectionProps={{ ...provided.dragHandleProps }}
														id={section}
														list={list[section]}
													/>
												) : /text/.test(section) ? (
													<Text
														dragSectionProps={{ ...provided.dragHandleProps }}
														id={section}
														textSection={textSection[section]}
													/>
												) : (
													<Sections
														sectionName={section}
														dragSectionProps={{ ...provided.dragHandleProps }}
													/>
												)}
											</div>
										</div>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</PageContainer>
	)
}

export default Document
