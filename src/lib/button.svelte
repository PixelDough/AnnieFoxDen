<script>
	const { children } = $props();
</script>

<style>
	.badge::after {
		content: "";
		position: absolute;
		transform: translate(-88px, -0px);
		width: 88px;
		height: 31px;
		background-color: white;
		
		-webkit-mask-image: linear-gradient(45deg,rgba(0,0,0,0) 40%,#000 50%,rgba(0,0,0,0) 60%);
		-webkit-mask-size: 800%;
		-webkit-mask-position: 0;
		
		mask-image: linear-gradient(45deg,rgba(0,0,0,0) 40%,#000 50%,rgba(0,0,0,0) 60%);
		mask-size: 800%;
		mask-position: 25%;
		pointer-events: none;
	}
	
	.badge:hover::after {
		transition: mask-position 1s ease,-webkit-mask-position 1s ease;
		-webkit-mask-position: 120%;
		mask-position: 120%;
		opacity: 1;
	}
</style>

<span class="badge">
	{#if children}
		{@render children()}
	{/if}
</span>