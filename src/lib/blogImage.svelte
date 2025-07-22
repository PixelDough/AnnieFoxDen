<script>
	const { src = "", alt, link, height="200px" } = $props();
	import HoverObject from "$lib/hoverObject.svelte"
</script>

<style>
	img {
		object-fit: contain;
		flex: 1 256px;
		max-width: 100%;
	}
</style>

<div style:max-width="49%">
	<HoverObject>
		<a href={link ?? src} target="_blank">
			<img src={src} alt={alt} style="height: {height}" />
		</a>
	</HoverObject>
</div>