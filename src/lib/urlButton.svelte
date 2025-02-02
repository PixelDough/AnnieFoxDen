<script>
	const { html, onclick = null } = $props();
	import Button from '$lib/button.svelte';
</script>


{#if onclick}
	<div onclick={onclick} style:cursor="pointer">
		<Button><span style:pointer-events="none">{@html html}</span></Button>
	</div>
{:else}
	<Button>{@html html}</Button>
{/if}
