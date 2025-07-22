<script lang="ts">
	let { children } = $props();
	import { page } from '$app/state';
	import '$lib/custom.css';
	import '@fontsource/unifontex';
	import "@fontsource/opendyslexic"; // Defaults to weight 400
	import "@fontsource/opendyslexic/400.css"; // Specify weight
	import "@fontsource/opendyslexic/400-italic.css"; // Specify weight and style
	import '@fontsource-variable/geist-mono';
	import '@fontsource-variable/raleway';
	import AnnieTransparentMedium from '$lib/assets/AnnieTransparentMedium.png';
	import Header from '$lib/header.svelte';
	
	import { title } from "$lib/store.js";
	import Music from '$lib/assets/SpaceMusic_60bpm.mp3';

	import { Canvas } from '@threlte/core'
  	import Scene from '$lib/Scene.svelte'
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="darkreader-lock" />

	{#key title}
		<meta property="og:site_name" content="Annie's Den" />
		<meta property="og:type" content="website" />
		<meta property="og:title" content={$title} />
		<meta property="og:description" content={""} />
		<meta property="og:image" content={AnnieTransparentMedium} />
	{/key}
	
	<!-- <link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap"
		rel="stylesheet"
	/> -->
	<title>{$title}</title>
</svelte:head>

<audio src={Music} autoplay volume={0.2} loop></audio>
<div style="position: fixed; width: 100%; height: 100%; z-index: -1; left: 0; top: 0;">
	<div style="width: 100%; height: 100%;">
		<Canvas colorManagementEnabled={true} colorSpace={"srgb"}>
			<Scene />
		</Canvas>
	</div>
	<div style="position: fixed; width: 100%; height: 100%; z-index: 0; left: 0; top: 0; backdrop-filter: blur(20px);"></div>
</div>
<div class="column">
	<Header pageName={$title} />
		
	<main>
		{@render children()}
	</main>
	
	<footer>
		<hr />
		<div style="display: flex; flex-direction: row; justify-content: space-between;">
			<div>
				<h6>Page built using SvelteKit</h6>
			</div>
			<div style:display="flex" style:flex-direction="row" style:gap="8px" style:flex-wrap="wrap">
				<h6><a href="/contact">contact</a></h6>
				<h6><a href="/todo">todo</a></h6>
				<h6><a href="/changelog">changelog</a></h6>
			</div>
		</div>
	</footer>
</div>