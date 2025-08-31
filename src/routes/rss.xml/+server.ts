import { Feed } from "feed";
import { getPosts } from "$lib/posts/getPosts";
import MarkdownIt from "markdown-it";
import { readFileSync } from "node:fs";
import { dev } from '$app/environment';
export const prerender = true;

function rmIncompTags(text: string): string {
	const blogImageRegex = /<BlogImage.*\/>/gi;
	const blogImagesRegex = /<BlogImages.*\/>/gi;
	const blogItemCollectionRegex = /<BlogItemCollection.*>/gi
    const componentRegex = /<[A-Z][a-zA-Z0-9]*(\s[^>]*)*(\/>|>)/g;
    const scriptRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    const frontmatterRegex = /^---[\s\S]*?---|^(\+\+\+)([\s\S]*?)\1/g;
	const componentCloseRegex = /<\/.*>/gi

	// Gets the import lines
	const importStringsRegex = /import.*(?<=\').*(?<=\')/gi;
	// Gets the name of the import
	const importNameRegex = /(?<=import ).*(?= from)/i;
	// Gets the path of the import
	const importPathRegex = /(?<=\').*(?=\')/i;
	// Gets the markdown image lines that are using a sveltekit import name as the url
	// TODO: UPDATE DESC AND NAME
	const markdownImageWithSvelteImportRegex = /\(\{.*\}\)/gi;
	// Gets the part of a string that is between curly brackets (including the brackets)
	const betweenWithCurlyBracketsRegex = /(?=\{).*(?<=\})/i;
	// Gets the part of a string that is between curly brackets (excluding the brackets)
	const betweenCurlyBracketsRegex = /(?<=\{).*(?=\})/i;
	// Gets the contents of the url of a markdown image line
	const markdownImageUrlRegex = /(?<=\().*(?=\))/i;
	// Gets the part of the filepath that comes after "assets" but before any file extensions
	const imageAssetDirectoryRegex = /(?=assets\/).*(?=\.)/;
	// Get all lines that contain markdown images
	const markdownImageRegex = /\(\$lib\/.+?\)/i;

	// \([^)]*\)

	// Get all the imports
	const importStrings = text.match(importStringsRegex);
	var imports: { [key: string]: string} = {}
	importStrings?.forEach(s => {
		let key = s.match(importNameRegex);
		let value = s.match(importPathRegex);
		if (!key || !value) return;
		imports[key[0]] = value[0];
	});
	console.log(imports);

	// Convert any lines that use import keys to use the approproate import values
	const imageLines = text.match(markdownImageWithSvelteImportRegex);
	console.log(imageLines)
	imageLines?.forEach(l => {
		const key = l.match(betweenCurlyBracketsRegex)![0];
		const value = imports[key];
		if (!value) return;
		const fixedLine = l.replace(betweenWithCurlyBracketsRegex, value);
		console.log(fixedLine)
		text = text.replace(l, fixedLine);
	})

	const imagesGlob = import.meta.glob(
		'$lib/assets/**/*.{gif,png,jpg,jpeg,PNG,JPEG}',
		{
			eager: true,
			as: 'url',
		}
	);

	// Make dictionaries of image "key" (from "assets" to the extensions) and value being the path and module properties
	const imagePaths: { [key: string]: string } = {}
	const imageModules: { [key: string]: string } = {}
	Object.entries(imagesGlob).forEach(pathModulePair => {
		const [path, module] = pathModulePair;
		const key = module.match(imageAssetDirectoryRegex)![0];
		imagePaths[key] = path;
		imageModules[key] = module;
		console.log(key)
	});
	
	const finalImageLines = text.match(markdownImageRegex);
	finalImageLines?.forEach(l => {
		const key = l.match(imageAssetDirectoryRegex)![0];
		const value = imagePaths[key]!;
		console.log(`the value is ${l}`);
		if (!value) return;
		const imageUrl = dev ? `http://localhost:5173${value}` : `https://anniesden.dev${value}`
		const fixedLine = l.replace(markdownImageUrlRegex, imageUrl);
		text = text.replace(l, fixedLine);
	})

	console.log(text)

    return text
			.replace(blogImageRegex, '')
			.replace(blogImagesRegex, '')
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