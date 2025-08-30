import { json } from '@sveltejs/kit'
import { getPosts } from '$lib/posts/getPosts'

export async function load({ fetch, params }) {
	let posts = await Promise.all(
		getPosts().map(async (articleName) => {
			const post = await import(`$lib/posts/${articleName}.svx`);
			const metadata = post.metadata;
			const articleUrl = `/posts/${articleName}`
			const articleSlug = articleName

			return {
				metadata,
				articleUrl,
				articleSlug
			};
		})
	)

	return { posts }
}