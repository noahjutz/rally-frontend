import { redirect } from '@sveltejs/kit';
import Jwt from 'jsonwebtoken';

export function load({ cookies }) {
	const token = cookies.get('token');
	if (!token) throw redirect(302, '/');

	const decoded = Jwt.verify(token, import.meta.env.VITE_JWT_KEY);

	console.log(decoded);

	return { token, decoded };
}
