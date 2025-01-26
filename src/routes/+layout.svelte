<script lang="ts">
	let { children } = $props();
	import { page } from '$app/state';
	import '$lib/custom.css';
	import AnnieTransparentMedium from '$lib/assets/AnnieTransparentMedium.png';
	import Header from '$lib/header.svelte';
	
	import { title } from "$lib/store.js";
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="darkreader-lock" />
	
	<!-- <link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap"
		rel="stylesheet"
	/> -->
	<title>{$title}</title>
</svelte:head>

<div class="column">
	
	<Header pageName={$title} />
		
	<main>
		{@render children()}
	</main>
	
	<footer>
		<hr \>
		<div style="display: flex; flex-direction: row; justify-content: space-between;">
			<div>
				<h6>Page built using Svelte</h6>
			</div>
			<div style:display="flex" style:flex-direction="row" style:gap="8px" style:flex-wrap="wrap">
				<h6><a href="/contact">contact</a></h6>
				<h6><a href="/changelog">changelog</a></h6>
			</div>
		</div>
	</footer>
</div>