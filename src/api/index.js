// base API URL
const API_BASE_URL = process.env.NODE_ENV === 'production' ? '' : 'http://woke-company-backend.bridgeschoolapp.io';

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
