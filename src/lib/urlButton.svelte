<script>
	const { html, onclick = null } = $props();
	import Button from '$lib/button.svelte';
</script>


{#if onclick}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div onclick={onclick} style:cursor="pointer">
		<Button><span style:pointer-events="none">{@html html}</span></Button>
	</div>
{:else}
	<Button>{@html html}</Button>
{/if}
