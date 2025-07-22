<script lang="ts">
	import { formatDate } from '$lib/utils'
	import { title } from '$lib/store.js';
	title.set("Blog");
	
	let { data } = $props()
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.title} />
</svelte:head>

<article>
	<hgroup>
		<h1>{data.title}</h1>
		<h5>Published {formatDate(data.date)}</h5>
	</hgroup>
	
	<hr/>

	<div class="prose">
		<data.content />
	</div>
	
	<hr/>
	
	<div class="tags">
		{#each data.categories as category}
			<h5 class="tag">&num;{category}</h5>
		{/each}
	</div>
</article>

<style>
	article {
		margin-inline: auto;
		margin: 8px;
		
		* {
			margin-top: 8px;
			margin-bottom: 8px;
		}

		h1 {
			text-transform: capitalize;
		}

		.tags {
			display: flex;
			gap: 1ch;
		}
		
		.tag {
			color: #bc7aff
		}
		
		.prose {
			margin: 32px;
			[class^="p"] {
				text-indent: 3ch;
			}
		}
	}
</style>
