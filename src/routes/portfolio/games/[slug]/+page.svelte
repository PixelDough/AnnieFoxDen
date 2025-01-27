<script>
	import { title } from '$lib/store.js';
	title.set("Portfolio.Games");
	import { Vimeo } from 'sveltekit-embed';
	
	let { data } = $props();
</script>

<style>
	h2 {
		margin-top: 16px;
		margin-bottom: 16px;
	}
</style>

<a href="../">{"< back"}</a>
<h1>{data.post.title}</h1>

<h2>When: {data.post.date}</h2>
<h2>Status: {data.post.status}</h2>

<h2>Videos</h2>
<div
	style:display="flex"
	style:flex-direction="row"
	style:flex-wrap="wrap"
	style:gap="8px"
	style:justify-content="center"
>
	{#each data.post.videoIds as videoId }
		<span style:flex="1 256px" style:background="black">
			<Vimeo vimeoId={videoId} />
		</span>
	{/each}
</div>

{#if data.post.collaborators.length > 0}
	<h2>Collaborators</h2>
	<p>{data.post.collaborators.join(", ")}</p>
{/if}

<h2>About</h2>
<div style:text-indent="3em">{@html data.post.content}</div>
	