<script>
	const { path = "", imagePath = "" } = $props();
	import Button from '$lib/button.svelte';
	
	function pathToUrl(path) {
		if (!path) return '';
		return `https://${path.replace(/^.*[\\/]/, '').replace(/\.[^/.]+$/, '')}`;
	}
</script>

{#if path}
	<a href={pathToUrl(path)} aria-label={path}>
		<Button>
			<img src={imagePath} />
		</Button>
	</a>
{:else}
	<Button>
		<img src={imagePath} />
	</Button>
{/if}