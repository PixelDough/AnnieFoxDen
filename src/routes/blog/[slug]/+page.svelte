<script lang="ts">
	import { formatDate, toDateTime } from '$lib/utils'
	import { title } from '$lib/store.js';
	import SeoHeader from '$lib/seoHeader.svelte';
	import TagChip from '$lib/tagChip.svelte';
	import { label } from 'three/tsl';
	import ContainerBubble from '$lib/containerBubble.svelte';
	title.set("Blog");
	
	let { data } = $props()
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta property="article:published_time" content={toDateTime(data.date).toISOString()} />
</svelte:head>

<SeoHeader site_name="Annie's Den" title={data.title} type="article" description={data.description} image={data.thumbnail} />
<ContainerBubble>
	<article>
		<hgroup>
			<h1>{data.title}</h1>
			<div class="dateAndTags">
				<h5 style="date">Published {formatDate(data.date)}</h5>
				<div class="horizontal">
					{#each data.categories as category}
						<TagChip label={`${category}`} href="https://anniesden.dev/" />
					{/each}
				</div>
			</div>
		</hgroup>
		
		<hr/>

		<div class="prose">
			<data.content />
		</div>
	</article>
</ContainerBubble>

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
		
		.prose {
			margin: 4px;
		}

		.dateAndTags {
			display: flex;
			align-items: center;
			justify-content: space-between;
			max-width: 100%;
		}

		.date {
			flex-grow: 100;
		}

		.horizontal {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			gap: 8px;
		}
	}
</style>
