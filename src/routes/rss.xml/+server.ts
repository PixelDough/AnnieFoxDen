import { Feed } from "feed";
import { getPosts } from "$lib/posts/getPosts";
import MarkdownIt from "markdown-it";
import { readFileSync } from "node:fs";
export const prerender = true;

function rmIncompTags(text: string): string {
	const blogImageRegex = /<BlogImage .*\/>/i;
	const blogImagesRegex = /<BlogImages .*\/>/i;
	const blogItemCollectionRegex = /<BlogItemCollection.*>/i
    const componentRegex = /<[A-Z][a-zA-Z0-9]*(\s[^>]*)*(\/>|>)/g;
    const scriptRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    const frontmatterRegex = /^---[\s\S]*?---|^(\+\+\+)([\s\S]*?)\1/g;
	const componentCloseRegex = /<\/.*>/i

    return text
			.replace(blogImageRegex, "[Image available on website]")
			.replace(blogImagesRegex, "[Images available on website]")
			.replace(blogItemCollectionRegex, '')
			.replace(componentRegex, '[Content available on website]')
            .replace(scriptRegex, '')
            .replace(frontmatterRegex, '')
			.replace(componentCloseRegex, '')
}

export async function GET() {
	const md = MarkdownIt()

	const articles = await Promise.all(
        getPosts().map(async (articleName) => {
            const post = await import(`$lib/posts/${articleName}.svx`);
            const content = md.render(rmIncompTags(readFileSync(`src/lib/posts/${articleName}.svx`, 'utf-8')));

			const { title, description, date, categories, thumbnail, published } = post.metadata;
			return { slug: articleName, content, title, description, date, categories, thumbnail, published };
        })
    );

	const feed = new Feed({
		title: "Annie's Den",
		description: "a blog for me to ramble about anything i want!",
		id: 'https://anniesden.dev/',
		link: 'https://anniesden.dev/',
		language: 'en', // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
		favicon: 'https://anniesden.dev/favicon.png',
		copyright: `Copyright ${new Date().getFullYear().toString()}, Annie's Den`,
		generator: 'idk what a generator is', // optional, default = 'Feed for Node.js'
		feedLinks: {
			rss: 'https://anniesden.dev/rss.xml',
		},
		author: {
			name: 'anniesden',
			email: 'webmistress@anniesden.dev',
			link: 'https://anniesden.dev/about',
		},
		ttl: 60,
	});

	for (const post of articles) {
		feed.addItem({
			title: post.title,
			description: post.description,
			content: post.content,
			link: `https://anniesden.dev/blog/${post.slug}`,
			author: [
				{
					name: 'anniesden',
					email: 'webmistress@anniesden.dev',
					link: 'https://anniesden.dev/about',
				},
			],
			date: new Date(post.date),
		});
	}

	return new Response(feed.rss2(), {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
		},
	});
}