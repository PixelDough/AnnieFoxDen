<script>
	import { title } from '$lib/store.js';
	title.set("Portfolio.Games");
	let { data } = $props();
</script>

<p>
	I've got a LOT of games to document here, at least 5-6 years worth of prototypes and tech demos, as well as a few released games. It's going to take a while to sort through all my videos and write a bit about each one, so I'm just going to be releasing these posts as I finish each one.
</p>

{#each data.summaries as { slug, title, date }}
	<li><a href="./{slug}">{title}</a> - {date}</li>
{/each}