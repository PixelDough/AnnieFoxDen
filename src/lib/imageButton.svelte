<script>
	const { path = "", imagePath = "" } = $props();
	import Button from '$lib/button.svelte';
	
	function pathToUrl(path) {
		if (!path) return '';
		return `https://${path.replace(/^.*[\\/]/, '').replace(/\.[^/.]+$/, '')}`;
	}
</script>

{#if path && imagePath}
	<a href={pathToUrl(path)} aria-label={path}>
		<Button>
			<img src={imagePath} alt={imagePath} />
		</Button>
	</a>
{:else if imagePath}
	<Button>
		<img src={imagePath} alt={imagePath} />
	</Button>
{/if}