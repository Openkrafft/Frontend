import { kea } from 'kea'
import { IRole, Experience, Header, Contact, ContactType } from './types'

const editorLogic = kea({
	actions: {
		updateSectionTitle: (sectionTitle: string) => ({ sectionTitle }),
		updateHeader: ({ name, title, summary }: Header) => ({
			name,
			title,
			summary
		}),
		addContact: (contact: Contact) => ({ contact }),
		updateContact: (contactInfo: string, contactType: ContactType) => ({
			contactInfo,
			contactType
		}),
		updateSkills: (skills: string) => ({ skills }),
		addRole: (role: IRole) => ({ role }),
		deleteRole: (roleId: number) => ({ roleId }),
		updateRole: ({
			id,
			jobTitle,
			companyName,
			date,
			roleDescription
		}: {
			id: number
			jobTitle: string
			companyName: string
			date: {
				startDate: string
				endDate: string
			}
			roleDescription: string
		}) => ({
			id,
			jobTitle,
			companyName,
			date,
			roleDescription
		})
	},

	reducers: {
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
				addContact: (state: Contact[], contact: Contact) => [
					...state,
					contact
				],
				updateContact: (
					state: Contact[],
					{
						contactInfo,
						contactType
					}: { contactInfo: string; contactType: ContactType }
				) => {
					return state.map(
						(contact) =>
							contact.contactType === contactType ? contactInfo : contact
					)
				}
			}
		],
		skills: [
			'<li></li>',
			{
				updateSectionTitle: (
					state: string,
					{ sectionTitle }: { sectionTitle: string }
				) => sectionTitle,
				updateSkills: (state: string, { skills }: { skills: string }) => skills
			}
		],
		experience: [
			{
				sectionTitle: 'Work Experience',
				roles: [
					{
						roleId: 654654654,
						jobTitle: 'Pilot',
						companyName: 'Qatar Airways',
						date: {
							startDate: '01/2018',
							endDate: '02/2020'
						},
						roleDescription: '<li></li>'
					},
					{
						roleId: 5611546584,
						jobTitle: 'Lead Engineer',
						companyName: 'Nissan',
						date: {
							startDate: '01/2015',
							endDate: 'Present'
						},
						roleDescription: '<li></li>'
					}
				]
			},
			{
				updateSectionTitle: (
					state: Experience,
					{ sectionTitle }: { sectionTitle: string }
				) => ({ ...state, sectionTitle }),
				addRole: (state: Experience, { role }: { role: IRole }) => ({
					...state,
					roles: [ ...state.roles, role ]
				}),
				deleteRole: (state: Experience, { roleId }: { roleId: number }) => {
					const updatedRoles = state.roles.filter(
						(role) => role.roleId !== roleId
					)
					return {
						...state,
						roles: updatedRoles
					}
				},
				updateRole: (
					state: Experience,
					{
						id,
						jobTitle,
						companyName,
						date,
						roleDescription
					}: {
						id: number
						jobTitle: string
						companyName: string
						date: {
							startDate: string
							endDate: string
						}
						roleDescription: string
					}
				) => {
					const { roles } = state
					const updatedRoles = roles.map(
						(role: IRole) =>
							role.roleId === id
								? { ...role, jobTitle, companyName, date, roleDescription }
								: role
					)

					return {
						...state,
						roles: updatedRoles
					}
				}
			}
		]
	}
})

export default editorLogic
