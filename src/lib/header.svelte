<script lang="ts">
	let { pageName } = $props();
	import '$lib/custom.css';
	import AnnieTransparentMedium from '$lib/assets/AnnieTransparentMedium.png';
</script>

<div class="header">
	<img src={AnnieTransparentMedium} alt="Annie's Fox Den Icon"  />
	{pageName}
</div>
<!-- <marquee>Coming soon...</marquee> -->

<hr />