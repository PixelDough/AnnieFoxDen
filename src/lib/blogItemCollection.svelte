<script>
	const { children } = $props();
</script>

<div
	style:display="flex"
	style:flex-direction="row"
	style:flex-wrap="wrap"
	style:gap="8px"
	style:justify-content="center"
>
	{#if children}
		{@render children()}
	{/if}
</div>