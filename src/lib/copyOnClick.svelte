<script>
	const { children, stringToCopy } = $props();
	import { fade } from 'svelte/transition'
	
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
		content: "copied!";
		background: #00000077;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		pointer-events: none;
	}
</style>

<span 
	onclick={didCopy ? null : copyToClipboard} 
	style:cursor="pointer"
>
	<div class="container">
		{@render children()}
		{#if didCopy}
			<div transition:fade={{ duration: 100 }} class="overlay">
				<p>copied</p>
			</div>
		{/if}
	</div>
</span>