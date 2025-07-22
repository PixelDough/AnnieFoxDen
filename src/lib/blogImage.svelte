<script>
	const { src = "", height="200px" } = $props();
	import HoverObject from "$lib/hoverObject.svelte"
</script>

<style>
	img {
		object-fit: contain;
		flex: 1 256px;
		max-width: 100%;
	}
</style>

<div
	style:display="flex"
	style:flex-direction="row"
	style:flex-wrap="wrap"
	style:gap="8px"
	style:justify-content="center"
>
	<div style:max-width="49%">
		<HoverObject hoverScale={0.5}>
			<a href={src}>
				<img src={src} alt="" style="height: {height}" />
			</a>
		</HoverObject>
	</div>
</div>