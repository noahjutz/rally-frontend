import { redirect } from '@sveltejs/kit';

export const actions = {
	login: async ({ cookies, request }) => {
		const api = import.meta.env.VITE_RALLY_API_URL;

		const data = await request.formData();
		const user = {
			username: data.get('username'),
			password: data.get('password')
		};

		const tokenResponse = await fetch(api + '/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(user)
		});
		const tokenJson = await tokenResponse.json();
		const token = tokenJson['token'];

		// TODO: Handle incorrect credentials
		cookies.set('token', token, { path: '/' });

		throw redirect(302, '/dashboard');
	}
};
