<script>
	const { children, stringToCopy } = $props();
	
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
	span:after {
		content: "copied";
		background: #00000077;
		position: absolute;
		transform: translate(-0, -34px);
		width: 88px;
		height: 31px;
		justify-content: center;
		text-align: center;
		transition: opacity 0.2s;
		opacity: var(--opacity);
		pointer-events: none;
	}
</style>

<span 
	onclick={didCopy ? null : copyToClipboard} 
	style:cursor="pointer"
	style:--opacity={didCopy ? 1 : 0}
>
	{@render children()}
</span>