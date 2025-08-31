<script lang="ts">
	const { children } = $props();
</script>

<style>
	.containerBubble {
		padding: 20px;
		margin: 0px;
		margin-bottom: 12px;
		gap: 12px;
		background: #7a45eb55;
		box-shadow: 
			inset 6px 6px 8px rgb(172, 113, 255, 0.5),
			inset -4px -4px 3px rgb(79, 40, 197, 0.5),
			inset 0px -10px 30px rgb(58, 40, 197, 0.8)
			;
		backdrop-filter: blur(10px);
		background-clip: padding-box;
		border-radius: 24px;
		overflow: clip;
	}
</style>

<div class="containerBubble">
	{@render children()}
</div>