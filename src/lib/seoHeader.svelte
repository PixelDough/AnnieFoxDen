<script lang="ts">
	let { title = null, description = null, type = null, site_name = null, image = null} = $props();

	import AnnieTransparentMedium from '$lib/assets/AnnieTransparentMedium.png';
	import AnniePfpZoomOut from '$lib/assets/AnniePfpZoomOut.png';
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="darkreader-lock" />

	<meta property="og:site_name" content={site_name ?? "Annie's Den"} />
	<meta property="og:type" content={type ?? "website"} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description ?? ""} />
	<meta property="og:image" content={image ?? AnniePfpZoomOut} />
	<meta property="og:image:type" content="image/png">
	<meta property="og:image:width" content="1024">
	<meta property="og:image:height" content="1024">
	
	<title>{title}</title>
</svelte:head>