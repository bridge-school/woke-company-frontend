

const certifiedCompanies = (
	companies,
	filter
	) => {
	switch (filter) {
		case 'SHOW_ALL':
			return companies;
		case 'SHOW_CERTIFIED':
			return companies.filter(
			c => c.certified,
			);
	}
}

export default certifiedCompanies;