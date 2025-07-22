import { readdirSync } from 'node:fs';

export function getPosts() {
	try {
	  const files = readdirSync('./src/lib/posts', { withFileTypes: true });
	  const filesFiltered = files.filter(dirent => dirent.name.endsWith(".svx")).map(dirent => dirent.name.replace(/\.[^/.]+$/, ""));
	  console.log(filesFiltered);
	  return filesFiltered;
	} catch (error) {
	  console.error(`Error reading articles:`, error);
	  return [];
	}
}