<script>
	import { formatDate } from '$lib/utils'
	import { title } from '$lib/store.js';
	title.set("Blog");
	let { data } = $props();
	
	let ltz = Intl.DateTimeFormat().resolvedOptions().timeZone;
	
	let sortedArticles = $state(
		[...data.posts]
			.sort((a, b) => {
				const dateA = new Date(a.metadata.date);
				const dateB = new Date(b.metadata.date);
				return dateA.getTime() - dateB.getTime();
			})
			.reverse()
	);
	console.log(sortedArticles);

	import PortfolioThumbnail from '$lib/portfolioThumbnail.svelte';
	import HoverObject from '$lib/hoverObject.svelte';
	import SeoHeader from '$lib/seoHeader.svelte';
	import TagChip from '$lib/tagChip.svelte';
	import ContainerBubble from '$lib/containerBubble.svelte';
</script>

<SeoHeader title="Blog" />

<style>
	.item {
		height: 140px;
	}
	.container {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: fit-content;
		gap: 10px;
	}
	.title-box {
		position: relative;
		display: flex;
		justify-content: space-between;
		height: fit-content;
		margin: 0;
	}
	.title {
		padding: 0;
		padding-bottom: 4px;
		margin: 0;
		flex-grow: 100;
	}
	.date {
		padding: 0;
		padding-bottom: 16px;
		margin: 0;
		color: #d7afff;
		flex-grow: 100;
	}
	.details {
		align-items: end;
		text-align: end;
		max-width: 50%;
		height: fit-content;
	}
	.tag {
		color: #d7afff;
		padding: 0;
		margin: 0;
	}
	.thumbnail {
		width: 100%;
		height: 100%;
		object-fit: cover;
		overflow: hidden;
		border-radius: 16px;
		font-size: 0;
	}

	.blog-container {
		/* display: block; */
		width: 100%;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		align-items: start;
		align-content: start;
		justify-content: start;
		gap: 8px;
	}
</style>

<div class="grid basic-gap">
	{#each sortedArticles as article }
		<div class="item">
			<!-- <img src={article.metadata.thumbnail} alt={article.articleSlug} class="thumbnail" /> -->
			<div class="container-bubble">
				<span class="container">
					<span class="title-box">
						<span>
							<a class="blog-container" href="./{article.articleSlug}">
								<h2 class="title">{article.metadata.title}</h2>
							</a>
							<h4 class="tag">{article.metadata.description}</h4>
						</span>
						<div class="details">
							<h4 class="date">{formatDate(article.metadata.date)}</h4>
						</div>
					</span>
					<div class="tags">
						{#each article.metadata.categories as category}
							<TagChip label={category} href="" />
						{/each}
					</div>
				</span>
			</div>
		</div>
	{/each}
</div>