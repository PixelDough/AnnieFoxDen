<script>
	import BlogImage from "$lib/blogImage.svelte";
	export let src;
	export let alt;
	export let url;
</script>

<BlogImage src={src} alt={alt} link={url} />