export interface IRole {
	roleId: number
	jobTitle: string
	companyName: string
	date: {
		startDate: string
		endDate: string
	}
	roleDescription: string
}

export interface Experience {
	sectionTitle: string
	roles: IRole[]
}

export interface Header {
	name: string
	title: string
	summary: string
}
