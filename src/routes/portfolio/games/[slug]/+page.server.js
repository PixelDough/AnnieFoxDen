import { error } from '@sveltejs/kit';
import { data } from '../data.js';

export function load({ params }) {
	const post = data.find((post) => post.slug === params.slug);

	if (!post) error(404);

	return {
		post
	};
}