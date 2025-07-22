<script>
	const { images, height="200px" } = $props();
	import BlogImage from "$lib/blogImage.svelte";
	import BlogItemCollection from "./blogItemCollection.svelte";
</script>

<style>
	img {
		object-fit: contain;
		flex: 1 256px;
		max-width: 100%;
	}
</style>

<BlogItemCollection>
	{#each images as image }
		<BlogImage src={image.src} alt={image.alt} link={image.link} height={height} />
	{/each}
</BlogItemCollection>