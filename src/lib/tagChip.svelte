<script lang="ts">
	import HoverObject from "./hoverObject.svelte";

	const { label, href } = $props();
</script>

<style>
	div {
		border-radius: 16px;
		background: #e38d50;
		box-shadow: 
			inset 2px 2px 8px gold,
			inset -1px -1px 3px red,
			8px 8px 8px black
			;
		mask: radial-gradient(
			circle 5px at 12px,
			#0000 98%,
			#000
		);
		width: fit-content;
		height: 30px;
		align-items: center;
		align-content: center;
	}
	a {
		text-decoration: none;
	}
	
	h6 {
		margin: 6px;
		margin-left: 20px;
		color: #fffded;
	}
</style>

<HoverObject>
	<a href={href}>
		<div>
			<h6>#{label}</h6>
		</div>
	</a>
</HoverObject>