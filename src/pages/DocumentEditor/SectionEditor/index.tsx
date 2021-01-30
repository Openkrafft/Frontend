import React from 'react'
import { Drawer } from 'antd'
import { useValues, useActions } from 'kea'
import globalLogic from '../../../logic'
import editorLogic from '../logic'
import { Section } from '../types'

import HeaderEditor from './HeaderEditor'
import ContactInfoEditor from './ContactInfoEditor'
import SkillsEditor from './SkillsEditor'
import ExperienceEditor from './ExperienceEditor'
import ProjectEditor from './ProjectsEditor'
import TextEditor from './TextEditor'
import ListEditor from './ListEditor'
import EducationEditor from './EducationEditor'

import './styles.css'
import { capitalizeFirstLetter, extractTextFromUUID } from 'src/utils'

const SectionEditor: React.FC = () => {
	const { toggleDrawer } = useActions(globalLogic)
	const { sections } = useValues(editorLogic)
	const { drawer: { isVisible, section } } = useValues(globalLogic)
	const allSections = [ 'header', ...sections ]
	const sectionName =
		section === 'ALL' ? 'Edit document' : capitalizeFirstLetter(section)

	const sectionEditors: any = {
		header: <HeaderEditor />,
		contactInfo: <ContactInfoEditor />,
		experience: <ExperienceEditor />,
		projects: <ProjectEditor />,
		text: <TextEditor />,
		list: <ListEditor />,
		education: <EducationEditor />
	}

	const renderEditAll = (
		<div>
			{allSections.map((section: Section) => {
				const sectionName = /(skills|list|text)/.test(section)
					? capitalizeFirstLetter(extractTextFromUUID(section))
					: section.charAt(0).toUpperCase() + section.slice(1)
				return (
					<section key={section} style={{ marginBottom: 10 }}>
						<h1>Edit {sectionName}</h1>
						{/skills/.test(section) ? (
							<SkillsEditor id={section} />
						) : (
							sectionEditors[section]
						)}
					</section>
				)
			})}
		</div>
	)

	return (
		<Drawer
			title={sectionName}
			placement='right'
			onClose={() => toggleDrawer({ isVisible: false, section: sectionName })}
			visible={isVisible}
			width={520}>
			{section === 'ALL' ? (
				renderEditAll
			) : /skills/.test(section) ? (
				<SkillsEditor id={section} />
			) : (
				sectionEditors[section]
			)}
		</Drawer>
	)
}

export default SectionEditor
