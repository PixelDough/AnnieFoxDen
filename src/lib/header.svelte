<script lang="ts">
	let { pageName } = $props();
	import '$lib/custom.css';
	import AnnieTransparentMedium from '$lib/assets/AnnieTransparentMedium.png';
	import Marquee from 'svelte-fast-marquee';
</script>

<div class="header">
	<img src={AnnieTransparentMedium} alt="Annie's Fox Den Icon"  />
	<h1>{pageName}</h1>
</div>

<hr />

<Marquee pauseOnHover={true} speed={50} play={true} gap="8px" style="line-height: 0.0em; mask-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 1) 90%, rgba(255, 255, 255, 0) 100%)">
	<p> / </p>
	<p> / </p>
	<p> / </p>
	<p>
		This website is under active construction. Please be patient as the webmistress works!
	</p>
	<p> (>^3^)> </p>
</Marquee>

<hr />