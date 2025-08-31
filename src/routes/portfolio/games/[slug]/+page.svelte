<script>
	import Button from '$lib/button.svelte';
	import ContainerBubble from '$lib/containerBubble.svelte';
	import HoverObject from '$lib/hoverObject.svelte';
	import SeoHeader from '$lib/seoHeader.svelte';
	import { title } from '$lib/store.js';
	title.set("Portfolio.Games");
	import { Vimeo } from 'sveltekit-embed';
	
	let { data } = $props();

	const images = import.meta.glob(`$lib/assets/portfolio/**/*.png`, { eager: true, as: 'url' });
	const picSources = Object.keys(images).filter((url) => url.startsWith(`/src/lib/assets/portfolio/${data.post.slug}/`)).map((key) => images[key]);

	var collaboratorUrls = new Map();
	data.post.collaborators.forEach((collab) => {
		if (collab === "bscit") {
			collaboratorUrls.set(collab, "https://bscit.dev/");
		}
	});
</script>

<SeoHeader title="Portfolio - {data.post.title}" />

<div class="basic-column basic-gap">
	<div class="container-bubble">
		<a href="../">{"< back"}</a>
		<h1>{data.post.title}</h1>

		<h2>{data.post.date}</h2>
	</div>

	<div class="container-bubble">
		{#if data.post.url}
			<h2>Status: <a href={data.post.url}>{data.post.status}</a></h2>
		{:else}
			<h2>Status: {data.post.status}</h2>
		{/if}
	</div>

	{#if data.post.videoIds.length > 0}
		<div class="container-bubble">
			<h2>Videos</h2>
			<hr />
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
		</div>
	{/if}

	{#if picSources.length > 0}
		<div class="container-bubble">
			<h2>Pics</h2>
			<hr />
			<div
				style:display="flex"
				style:flex-direction="row"
				style:flex-wrap="wrap"
				style:gap="8px"
				style:justify-content="center"
			>
				{#each picSources as src }
				<div style:max-width="49%">
					<HoverObject>
						<a href={src}>
							<img src={src} alt="" style:object-fit="contain" style:flex="1 256px" style:max-width="100%" style:height="200px" style:background-color="black" />
						</a>
					</HoverObject>
				</div>
				{/each}
			</div>
		</div>
	{/if}

	{#if data.post.collaborators.length > 0}
		<div class="container-bubble">
			<h2>Collaborators</h2>
			<ul>
				{#each data.post.collaborators as collab }
					{#if collaboratorUrls.has(collab)}
						<a href={collaboratorUrls.get(collab)}>{collab}</a>
					{:else}
						<li>{collab}</li>
					{/if}
				{/each}
			</ul>
		</div>
	{/if}

	<div class="container-bubble">
		<h2>About</h2>
		<hr />
		<div style:text-indent="3em">{@html data.post.content}</div>
	</div>
</div>