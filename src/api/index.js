// base API URL
const API_BASE_URL = process.env.NODE_ENV === 'production' ?'http://woke-company-backend.bridgeschoolapp.io': 'http://localhost:8081';

// example API method
export const checkApiServer = () =>
	fetch(`${API_BASE_URL}/health`)
		.then((res) => res.json())
		.then((response) => {
			console.log(response);
		})
		.catch((err) => {
			console.log(err);
		});

// example API method
export const fetchChecklist = () =>
	fetch(`${API_BASE_URL}/checklist`)
		.then((res) => res.json())
		.catch((err) => {
			console.log(err);
		});
