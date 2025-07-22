<script lang="ts">
	let { title: titleOverride = null, description = null, type = null, site_name = null, image = null} = $props();
	import { title as titleStored } from "$lib/store.js";

	let title = titleOverride ?? titleStored;

	import AnnieTransparentMedium from '$lib/assets/AnnieTransparentMedium.png';
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="darkreader-lock" />

	{#key title}
		<meta property="og:site_name" content={site_name ?? "Annie's Den"} />
		<meta property="og:type" content={type ?? "website"} />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description ?? ""} />
		<meta property="og:image" content={image ?? AnnieTransparentMedium} />
	{/key}
	
	<title>{title}</title>
</svelte:head>