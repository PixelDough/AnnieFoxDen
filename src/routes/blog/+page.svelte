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
</script>

<SeoHeader title="Blog" />

<style>
	.item {
		height: 140px;
	}
	.title-box {
		position: absolute;
		display: flex;
		justify-content: space-between;
		top: 0px;
		left: 0px;
		right: 0px;
		padding: 16px;
		height: 100%;
		margin: 0;
		background: linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0, 0.4) 100%);
		/* mask: linear-gradient(
			rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.95) 50%, rgba(0, 0, 0, 0.9) 100%
		); */
		/* backdrop-filter: blur(5px); */
		background-clip: padding-box;
		border-radius: 16px;
		overflow: clip;
	}
	.title {
		padding: 0;
		padding-bottom: 4px;
		margin: 0;
		color: white;
		text-shadow: 2px 2px 4px black;
	}
	.details {
		align-items: end;
		text-align: end;
	}
	.tag {
		color: #bc7aff;
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
		display: block;
		width: 100%;
	}
</style>

<div class="grid">
	{#each sortedArticles as article }
		<HoverObject hoverScale={0.3} --display="block">
			<a class="blog-container" href="./{article.articleSlug}">
				<div class="item">
					<img src={article.metadata.thumbnail} alt={article.articleSlug} class="thumbnail" />
					<div class="title-box">
						<div>
							<h3 class="title">{article.metadata.title}</h3>
							<h5 class="tag">{article.metadata.description}</h5>
						</div>
						<div class="details">
							<h4 class="title">{formatDate(article.metadata.date)}</h4>
							{#each article.metadata.categories as category}
								<h6>
									<span class="tag">&num;{category}</span>
								</h6>
							{/each}
						</div>
					</div>
				</div>
			</a>
		</HoverObject>
	{/each}
</div>