<script>
	let { slug, title } = $props();

	import PortfolioThumbnail from '$lib/portfolioThumbnail.svelte';
	import HoverObject from '$lib/hoverObject.svelte';
</script>

<style>
	.title {
		position: absolute;
		top: 6px;
		left: 8px;
		padding: 0;
		margin: 0;

		color: white;
		text-shadow: 2px 2px 4px black;
	}
	.itemContainer {
		border-radius: 16px;
	}
</style>

<a href="portfolio/games/{slug}" class="itemContainer">
	<HoverObject --display="block">
		<div class="item">
			<PortfolioThumbnail slug={slug} />
			<h3 class="title">{title}</h3>
		</div>
	</HoverObject>
</a>