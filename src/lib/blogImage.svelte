<script>
	const { src = "", alt, height="200px" } = $props();
	import HoverObject from "$lib/hoverObject.svelte"
</script>

<style>
	p {
		display: block;
	}
	img {
		object-fit: contain;
		flex: 1 256px;
		max-width: 100%;
	}
</style>

<HoverObject isSpan={true}>
	<img src={src} alt={alt} style="height: {height}" />
</HoverObject>