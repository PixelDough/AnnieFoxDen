<script>
	const { children, stringToCopy } = $props();
	import { fly } from 'svelte/transition'
	
	var didCopy = $state(false);
	function copyToClipboard() {
		didCopy = true;
		navigator.clipboard.writeText(stringToCopy);
		
		setTimeout(() => {
			didCopy = false;
		}, 2000);
	}
</script>

<style>
	.container {
		position: relative;
		width: 88px;
		height: 31px;
	}
	.overlay {
		background: #00000000;
		position: absolute;
		width: 100%;
		height: 100%;
		transform: translateY(-5px);
		display: flex;
		justify-content: center;
		align-items: center;
		pointer-events: none;
		z-index: 2000;
	}
</style>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<span 
	onclick={didCopy ? null : copyToClipboard} 
	style:cursor="pointer"
>
	<div class="container">
		{@render children()}
		{#if didCopy}
			<div transition:fly={{ duration: 300, y: -8 }} class="overlay">
				<h6>copied</h6>
			</div>
		{/if}
	</div>
</span>