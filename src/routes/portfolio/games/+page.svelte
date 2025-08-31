<script>
	import { title } from '$lib/store.js';
	title.set("Portfolio.Games");
	let { data } = $props();

	// Change year, month, and day to the date of the last update
	const lastUpdateDate = new Date(1744777764 * 1000);
	const lastUpdateStringGMT = lastUpdateDate.toUTCString();
	const lastUpdateString = lastUpdateDate.toLocaleString();

	import PortfolioThumbnail from '$lib/portfolioThumbnail.svelte';
	import HoverObject from '$lib/hoverObject.svelte';
</script>

<p>
	This section is constantly being updated. Check back for more projects soon!
</p>

<h5>
	Last updated: <br />
	{lastUpdateStringGMT}
	<br />
	{lastUpdateString}
</h5>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-template-rows: auto;
		grid-gap: 16px;
	}
	.title {
		position: absolute;
		top: 6px;
		left: 8px;
		padding: 0;
		margin: 0;

		color: white;
		text-shadow: 2px 2px 4px black;
	}
</style>

<div class="grid">
	{#each data.summaries as { slug, title, date }}
		<HoverObject --display="block">
			<a href="./{slug}">
				<div class="item">
					<PortfolioThumbnail slug={slug} />
					<h3 class="title">{title}</h3>
				</div>
			</a>
		</HoverObject>
	{/each}
</div>