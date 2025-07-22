import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const slug = params.slug;
		const post = await import(`$lib/posts/${slug}.svx`);
		const { title, description, date, categories, thumbnail, published } = post.metadata;
		const content = post.default;
		return { slug, content, title, description, date, categories, thumbnail, published };
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
}