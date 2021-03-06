import { kea } from 'kea'
import {
	IRole,
	Experience,
	Header,
	Contact,
	ContactType,
	Section,
	School,
	Project,
	SkillsSections,
	ListSections,
	TextSections,
	EducationSection,
	Projects
} from './types'
import _ from 'lodash'
import move from 'array-move'
import { extractTextFromHTML } from '../../utils'

const editorLogic = kea({
	actions: {
		addSection: (section: Section) => ({ section }),
		moveSectionUp: (section: Section) => ({ section }),
		moveSectionDown: (section: Section) => ({ section }),
		deleteSection: (section: Section) => ({ section }),
		updateHeader: ({ name, title, summary }: Header) => ({
			name,
			title,
			summary
		}),
		addContact: ({
			contactType,
			contactInfo
		}: {
			contactType: string
			contactInfo: string
		}) => ({ contactType, contactInfo }),
		swapContactInfo: (sourceIndex: number, destinationIndex: number) => ({
			sourceIndex,
			destinationIndex
		}),
		deleteContact: (contactType: ContactType) => ({ contactType }),
		updateContact: (contactInfo: string, contactType: ContactType) => ({
			contactInfo,
			contactType
		}),
		updateSkills: (skillsList: string, sectionId: string) => ({
			skillsList,
			sectionId
		}),
		addSkillsSection: (sectionId: string) => ({ sectionId }),
		removeSkillsSection: (sectionId: string) => ({ sectionId }),
		addSkills: (skill: string, sectionId: string) => ({ skill, sectionId }),
		removeSkills: (skill: string, sectionId: string) => ({ skill, sectionId }),
		updateSkillsTitle: (skillsTitle: string, sectionId: string) => ({
			skillsTitle,
			sectionId
		}),
		addListSection: (sectionId: string) => ({ sectionId }),
		removeListSection: (sectionId: string) => ({ sectionId }),
		addListContent: (listContent: string, sectionId: string) => ({
			listContent,
			sectionId
		}),
		removeListContent: (listContent: string, id: string) => ({
			listContent,
			id
		}),
		updateList: (listContent: string, sectionId: string) => ({
			listContent,
			sectionId
		}),
		updateListTitle: (listTitle: string, sectionId: string) => ({
			listTitle,
			sectionId
		}),
		addTextSection: (sectionId: string) => ({ sectionId }),
		removeTextSection: (sectionId: string) => ({ sectionId }),
		updateTextTitle: (textTitle: string, sectionId: string) => ({
			textTitle,
			sectionId
		}),
		updateTextContent: (textContent: string, sectionId: string) => ({
			textContent,
			sectionId
		}),
		updateProjectsTitle: (projectsTitle: string) => ({ projectsTitle }),
		addProject: (project: Project) => ({ project }),
		deleteProject: (id: string) => ({ id }),
		swapProjects: (sourceIndex: number, destinationIndex: number) => ({
			sourceIndex,
			destinationIndex
		}),
		addProjectDescriptionList: (id: string) => ({ id }),
		removeProjectDescriptionList: (id: string) => ({ id }),
		updateProject: ({ id, projectName, link, projectDescription }: Project) => ({
			id,
			projectName,
			link,
			projectDescription
		}),
		updateEducationTitle: (educationTitle: string) => ({ educationTitle }),
		addSchool: (school: School) => ({ school }),
		deleteSchool: (sectionId: School) => ({ sectionId }),
		swapSchools: (sourceIndex: number, destinationIndex: number) => ({
			sourceIndex,
			destinationIndex
		}),
		addSchoolDescriptionList: (id: string) => ({ id }),
		removeSchoolDescriptionList: (id: string) => ({ id }),
		updateExperienceTitle: (sectionTitle: string) => ({ sectionTitle }),
		addRole: (role: IRole) => ({ role }),
		updateSchool: ({
			id,
			schoolName,
			degree,
			date,
			description,
			hideDescription
		}: {
			id: string
			schoolName: string
			degree: string
			date: {
				startDate: string
				endDate: string
			}
			description: string
			hideDescription: boolean
		}) => ({
			id,
			schoolName,
			degree,
			date,
			description,
			hideDescription
		}),
		deleteRole: (id: string) => ({ id }),
		swapRoles: (sourceIndex: number, destinationIndex: number) => ({
			sourceIndex,
			destinationIndex
		}),
		addRoleDescriptionList: (id: string) => ({ id }),
		removeRoleDescriptionList: (id: string) => ({ id }),
		updateRole: ({
			id,
			jobTitle,
			companyName,
			date,
			stillWorking,
			roleDescription
		}: {
			id: number
			jobTitle: string
			companyName: string
			date: {
				startDate: string
				endDate: string
			}
			stillWorking: boolean
			roleDescription: string
		}) => ({
			id,
			jobTitle,
			companyName,
			date,
			stillWorking,
			roleDescription
		})
	},

	reducers: {
		sections: [
			[ 'contactInfo' ],
			{
				moveSectionUp: (state: Section[], { section }: { section: Section }) => {
					const currentSectionIndex = state.indexOf(section)
					const prevItemIndex = currentSectionIndex - 1
					let updatedSections = move(state, currentSectionIndex, prevItemIndex)

					return updatedSections
				},
				moveSectionDown: (state: Section[], { section }: { section: Section }) => {
					const currentSectionIndex = state.indexOf(section)
					const nextItemIndex = currentSectionIndex + 1
					let updatedSections = move(state, currentSectionIndex, nextItemIndex)

					return updatedSections
				},
				addSection: (state: Section[], { section }: { section: Section }) => [
					...state,
					section
				],
				deleteSection: (state: Section[], { section }: { section: Section }) =>
					state.filter((currentSection) => currentSection !== section)
			}
		],
		header: [
			{
				name: 'John Doe',
				title: 'Software Engineer',
				summary:
					'Enthusiastic software engineer with 3+ years experience participating in the complete product development.'
			},
			{
				updateHeader: (state: Header, { name, title, summary }: Header) => ({
					...state,
					name,
					title,
					summary
				})
			}
		],
		contacts: [
			[
				{
					contactType: 'EMAIL',
					contactInfo: 'username@gmail.com'
				},
				{
					contactType: 'PHONE',
					contactInfo: '+21624654377'
				},
				{
					contactType: 'ADDRESS',
					contactInfo: 'berlin, germany'
				},
				{
					contactType: 'LINKEDIN',
					contactInfo: 'www.linkedin.com/username'
				},
				{
					contactType: 'GITHUB',
					contactInfo: 'username'
				},
				{
					contactType: 'SKYPE',
					contactInfo: 'user.name'
				}
			],
			{
				addContact: (
					state: Contact[],
					{ contactType, contactInfo }: { contactType: string; contactInfo: string }
				) => [ ...state, { contactType, contactInfo } ],
				deleteContact: (
					state: Contact[],
					{ contactType }: { contactType: ContactType }
				) =>
					state.filter((contact: Contact) => contact.contactType !== contactType),
				updateContact: (
					state: Contact[],
					{
						contactInfo,
						contactType
					}: { contactInfo: string; contactType: ContactType }
				) => {
					return state.map(
						(contact) => (contact.contactType === contactType ? contactInfo : contact)
					)
				},
				swapContactInfo: (
					state: Contact[],
					{
						sourceIndex,
						destinationIndex
					}: { sourceIndex: number; destinationIndex: number }
				) => {
					state.splice(destinationIndex, 0, state.splice(sourceIndex, 1)[0])
					return [ ...state ]
				}
			}
		],
		list: [
			{},
			{
				addListSection: (
					state: ListSections,
					{ sectionId }: { sectionId: string }
				) => ({
					...state,
					[sectionId]: { listTitle: 'list', listContent: '<li></li>' }
				}),
				removeListSection: (
					state: ListSections,
					{ sectionId }: { sectionId: string }
				) => {
					let updatedState = _.omit(state, sectionId)
					return updatedState
				},
				updateListTitle: (
					state: ListSections,
					{ listTitle, sectionId }: { listTitle: string; sectionId: string }
				) => ({ ...state, [sectionId]: { ...state[sectionId], listTitle } }),
				updateList: (
					state: ListSections,
					{ listContent, sectionId }: { listContent: string; sectionId: string }
				) => ({ ...state, [sectionId]: { ...state[sectionId], listContent } }),
				addListContent: (
					state: ListSections,
					{ listContent, sectionId }: { listContent: string; sectionId: string }
				) => {
					let currentListSection = state[sectionId]
					let currentListContent = extractTextFromHTML(
						currentListSection.listContent
					)

					if (!currentListContent.length) {
						return {
							...state,
							[sectionId]: {
								...state[sectionId],
								listContent: `<li>${listContent}</li>`
							}
						}
					} else {
						return {
							...state,
							[sectionId]: {
								...state[sectionId],
								listContent: `<li>${currentListContent.join(
									'</li><li>'
								)}</li><li>${listContent}</li>`
							}
						}
					}
				},
				removeListContent: (
					state: ListSections,
					{ listContent, id }: { listContent: string; id: string }
				) => {
					let currentListSection = state[id]
					const currentListContent = extractTextFromHTML(
						currentListSection.listContent.replace(listContent, '')
					)
					return {
						...state,
						[id]: {
							...state[id],
							listContent: `<li>${currentListContent.join('</li><li>')}</li>`
						}
					}
				}
			}
		],
		textSection: [
			{},
			{
				addTextSection: (
					state: TextSections,
					{ sectionId }: { sectionId: string }
				) => ({
					...state,
					[sectionId]: { textTitle: 'Text Section', textContent: '' }
				}),
				removeTextSection: (
					state: TextSections,
					{ sectionId }: { sectionId: string }
				) => {
					let updatedState = _.omit(state, sectionId)
					return updatedState
				},
				updateTextTitle: (
					state: TextSections,
					{ textTitle, sectionId }: { textTitle: string; sectionId: number }
				) => ({ ...state, [sectionId]: { ...state[sectionId], textTitle } }),
				updateTextContent: (
					state: TextSections,
					{ textContent, sectionId }: { textContent: string; sectionId: number }
				) => ({ ...state, [sectionId]: { ...state[sectionId], textContent } })
			}
		],
		skills: [
			{},
			{
				addSkillsSection: (
					state: SkillsSections,
					{ sectionId }: { sectionId: string }
				) => ({
					...state,
					[sectionId]: { skillsTitle: 'skills', skillsList: '<li></li>' }
				}),
				removeSkillsSection: (
					state: SkillsSections,
					{ sectionId }: { sectionId: string }
				) => {
					let updatedState = _.omit(state, sectionId)
					return updatedState
				},
				updateSkillsTitle: (
					state: SkillsSections,
					{ skillsTitle, sectionId }: { skillsTitle: string; sectionId: number }
				) => ({ ...state, [sectionId]: { ...state[sectionId], skillsTitle } }),
				updateSkills: (
					state: SkillsSections,
					{ skillsList, sectionId }: { skillsList: string; sectionId: number }
				) => ({ ...state, [sectionId]: { ...state[sectionId], skillsList } }),
				addSkills: (
					state: SkillsSections,
					{ skill, sectionId }: { skill: string; sectionId: number }
				) => {
					let currentSkillsSection = state[sectionId]
					let skills = extractTextFromHTML(currentSkillsSection.skillsList)

					if (!skills.length) {
						return {
							...state,
							[sectionId]: { ...state[sectionId], skillsList: `<li>${skill}</li>` }
						}
					} else {
						return {
							...state,
							[sectionId]: {
								...state[sectionId],
								skillsList: `<li>${skills.join('</li><li>')}</li><li>${skill}</li>`
							}
						}
					}
				},
				removeSkills: (
					state: SkillsSections,
					{ skill, sectionId }: { skill: string; sectionId: number }
				) => {
					let currentSkillsSection = state[sectionId]
					const skills = extractTextFromHTML(
						currentSkillsSection.skillsList.replace(skill, '')
					)
					return {
						...state,
						[sectionId]: {
							...state[sectionId],
							skillsList: `<li>${skills.join('</li><li>')}</li>`
						}
					}
				}
			}
		],
		projects: [
			{
				projectsTitle: 'Projects',
				projects: {
					'project-60c6098f-0cd8-4f79-a57b-03bb7c8a1c28': {
						id: 'project-60c6098f-0cd8-4f79-a57b-03bb7c8a1c28',
						projectName: 'MyApp',
						link: 'www.github.com/myapp-repo',
						projectDescription: ''
					}
				}
			},
			{
				updateProjectsTitle: (
					state: Projects,
					{ projectsTitle }: { projectsTitle: string }
				) => ({ ...state, projectsTitle }),
				addProject: (state: Projects, { project }: { project: Project }) => {
					const updatedProjects = { ...state.projects, [project.id]: project }
					return {
						...state,
						projects: updatedProjects
					}
				},
				deleteProject: (state: Projects, { id }: { id: string }) => {
					const updatedProjects = _.omit(state.projects, id)
					return {
						...state,
						projects: updatedProjects
					}
				},
				swapProjects: (
					state: Projects,
					{
						sourceIndex,
						destinationIndex
					}: { sourceIndex: number; destinationIndex: number }
				) => {
					let updatedProjects: any = {}
					let projectIds = Object.keys(state.projects)
					projectIds.splice(
						destinationIndex,
						0,
						projectIds.splice(sourceIndex, 1)[0]
					)
					projectIds.map((id) => (updatedProjects[id] = state.projects[id]))
					return {
						...state,
						projects: updatedProjects
					}
				},
				addProjectDescriptionList: (state: Projects, { id }: { id: string }) => {
					const currentProject = state.projects[id]
					const updatedProject = {
						...currentProject,
						projectDescription: `<li>${currentProject.projectDescription}</li>`
					}

					return {
						...state,
						projects: {
							...state.projects,
							[id]: updatedProject
						}
					}
				},
				removeProjectDescriptionList: (state: Projects, { id }: { id: string }) => {
					const currentProject = state.projects[id]
					const updatedProject = {
						...currentProject,
						projectDescription: currentProject.projectDescription.replace(
							/<li>|<\/li>/g,
							''
						)
					}

					return {
						...state,
						projects: {
							...state.projects,
							[id]: updatedProject
						}
					}
				},
				updateProject: (
					state: Projects,
					{ id, projectName, link, projectDescription }: Project
				) => {
					const { projects } = state
					const updatedProjects = {
						...projects[id],
						projectName,
						link,
						projectDescription
					}

					return {
						...state,
						projects: {
							...projects,
							[id]: updatedProjects
						}
					}
				}
			}
		],
		education: [
			{
				educationTitle: 'Education',
				schools: {
					'school-619550f3-53a1-439c-929b-cc7131787c6a': {
						id: 'school-619550f3-53a1-439c-929b-cc7131787c6a',
						schoolName: '',
						degree: '',
						date: {
							startDate: 'Start date',
							endDate: 'End date'
						},
						description: '',
						hideDescription: false
					}
				}
			},
			{
				updateEducationTitle: (
					state: EducationSection,
					{ educationTitle }: { educationTitle: string }
				) => ({ ...state, educationTitle }),
				addSchool: (state: EducationSection, { school }: { school: School }) => {
					const updatedSchools = { ...state.schools, [school.id]: school }
					return {
						...state,
						schools: updatedSchools
					}
				},
				deleteSchool: (
					state: EducationSection,
					{ sectionId }: { sectionId: string }
				) => {
					const updatedSchools = _.omit(state.schools, sectionId)
					return {
						...state,
						schools: updatedSchools
					}
				},
				swapSchools: (
					state: EducationSection,
					{
						sourceIndex,
						destinationIndex
					}: { sourceIndex: number; destinationIndex: number }
				) => {
					let updatedSchools: any = {}
					let schoolIds = Object.keys(state.schools)
					schoolIds.splice(destinationIndex, 0, schoolIds.splice(sourceIndex, 1)[0])
					schoolIds.map((id) => (updatedSchools[id] = state.schools[id]))
					return {
						...state,
						schools: updatedSchools
					}
				},
				addSchoolDescriptionList: (
					state: EducationSection,
					{ id }: { id: string }
				) => {
					const currentSchool = state.schools[id]
					const updatedSchool = {
						...currentSchool,
						description: `<li>${currentSchool.description}</li>`
					}

					return {
						...state,
						schools: {
							...state.schools,
							[id]: updatedSchool
						}
					}
				},
				removeSchoolDescriptionList: (
					state: EducationSection,
					{ id }: { id: string }
				) => {
					const currentSchool = state.schools[id]
					const updatedSchool = {
						...currentSchool,
						description: currentSchool.description.replace(/<li>|<\/li>/g, '')
					}

					return {
						...state,
						schools: {
							...state.schools,
							[id]: updatedSchool
						}
					}
				},
				updateSchool: (
					state: EducationSection,
					{
						id,
						schoolName,
						degree,
						date,
						description,
						hideDescription
					}: {
						id: string
						schoolName: string
						degree: string
						date: {
							startDate: string
							endDate: string
						}
						description: string
						hideDescription: boolean
					}
				) => {
					const { schools } = state
					const updatedSchool = {
						...schools[id],
						schoolName,
						degree,
						date,
						description,
						hideDescription
					}

					return {
						...state,
						schools: {
							...schools,
							[id]: updatedSchool
						}
					}
				}
			}
		],
		experience: [
			{
				sectionTitle: 'Work Experience',
				roles: {
					'role-4cfff7f8-2ef9-4987-b964-f47fda09d017': {
						id: 'role-4cfff7f8-2ef9-4987-b964-f47fda09d017',
						jobTitle: '',
						companyName: '',
						date: {
							startDate: 'Start date',
							endDate: 'End date'
						},
						stillWorking: false,
						roleDescription: '<li></li>'
					}
				}
			},
			{
				updateExperienceTitle: (
					state: Experience,
					{ sectionTitle }: { sectionTitle: string }
				) => ({ ...state, sectionTitle }),
				addRole: (state: Experience, { role }: { role: IRole }) => {
					const updatedRoles = { ...state.roles, [role.id]: role }
					return {
						...state,
						roles: updatedRoles
					}
				},
				deleteRole: (state: Experience, { id }: { id: string }) => {
					const updatedRoles = _.omit(state.roles, id)
					return {
						...state,
						roles: updatedRoles
					}
				},
				swapRoles: (
					state: Experience,
					{
						sourceIndex,
						destinationIndex
					}: { sourceIndex: number; destinationIndex: number }
				) => {
					let updatedRoles: any = {}
					let roleIds = Object.keys(state.roles)
					roleIds.splice(destinationIndex, 0, roleIds.splice(sourceIndex, 1)[0])
					roleIds.map((id) => (updatedRoles[id] = state.roles[id]))
					return {
						...state,
						roles: updatedRoles
					}
				},
				addRoleDescriptionList: (state: Experience, { id }: { id: string }) => {
					const currentRole = state.roles[id]
					const updatedRole = {
						...currentRole,
						roleDescription: `<li>${currentRole.roleDescription}</li>`
					}

					return {
						...state,
						roles: {
							...state.roles,
							[id]: updatedRole
						}
					}
				},
				removeRoleDescriptionList: (state: Experience, { id }: { id: string }) => {
					const currentRole = state.roles[id]
					const updatedRole = {
						...currentRole,
						roleDescription: currentRole.roleDescription.replace(/<li>|<\/li>/g, '')
					}

					return {
						...state,
						roles: {
							...state.roles,
							[id]: updatedRole
						}
					}
				},
				updateRole: (
					state: Experience,
					{
						id,
						jobTitle,
						companyName,
						date,
						stillWorking,
						roleDescription
					}: {
						id: string
						jobTitle: string
						companyName: string
						date: {
							startDate: string
							endDate: string
						}
						stillWorking: boolean
						roleDescription: string
					}
				) => {
					const { roles } = state
					const updatedRoles = {
						...roles[id],
						jobTitle,
						companyName,
						date,
						stillWorking,
						roleDescription
					}

					return {
						...state,
						roles: {
							...roles,
							[id]: updatedRoles
						}
					}
				}
			}
		]
	}
})

export default editorLogic
