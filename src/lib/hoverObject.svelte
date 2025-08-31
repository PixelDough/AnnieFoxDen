<script>
	const { children, hoverScale = 1, isSpan = false } = $props();
	
	let element;
	var hovered = $state(false);
	
	function onMouseOver() {
		hovered = true;
	}
	
	function onMouseOut() {
		if (!hovered) { return; }
		hovered = false;
		element.children[0].style.transform = "";
		element.children[0].style.filter = "none";
	}
	
	function onMouseMove(e) {
		if (!hovered) { return; }
		
		const rect = element.getBoundingClientRect();
		const xoff = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 2 * hoverScale;
		const yoff = ((e.clientY - rect.top - rect.height / 2) / rect.height) * 2 * hoverScale;
		const translate = 3.0 * hoverScale;
		const transform = `translate3d(0, 0, ${translate}cm) rotate3d(${-yoff}, ${xoff}, 0, ${Math.sqrt(xoff * xoff + yoff * yoff) * 30}deg)`;
		const brightness = 1.0 - yoff / 4 - xoff / 4;
		
		if (element.children[0]) {
			element.children[0].style.transform = transform;
			element.children[0].style.filter = `brightness(${brightness}) drop-shadow(${-xoff * 4.0}px ${-yoff * 4.0}px 0px black)`;
			element.children[0].style.zindex = 2000;
		}
	}
</script>

<style>
	.badge::before {
		
	}
	.badge {
		/* background-color: black; */
		position: relative;
		perspective: 20cm;
		display: var(--display, flex);
		z-index: 0;
		
		width: 100%;
		height: 100%;
	}
	.badge img:hover {
		filter: brightness(1.1);
		z-index: 2000;
	}
	
	.badgeContent {
		transition-duration: 0.05s;
		will-change: transform;
		image-rendering: pixelated;
		position: relative;
		transform-style: preserve-3d;
        align-items: center;
        align-content: center;
        justify-content: center;
        object-fit: contain;
	}
	
	.badgeContent:hover {
		filter: brightness(1.1);
	}
	
	.badgeContent::after {
		content: "";
		left: 0;
		right: 0;
		background-color: white;
		
		mask-image: linear-gradient(45deg,rgba(0,0,0,0) 40%,#000 50%,rgba(0,0,0,0) 60%);
		mask-size: 800%;
		mask-position: 25%;
		pointer-events: none;
		z-index: 2000;
	}
	
	.badgeContent:hover::after {
		transition: mask-position 1s ease;
		mask-position: 120%;
		opacity: 1;
		z-index: 2000;
	}
	
	.badge:hover {
		z-index: 1000;
	}
</style>

{#if isSpan}
<!-- svelte-ignore a11y_no_static_element_interactions -->
<span class="badge" bind:this={element} onmouseenter={onMouseOver} onmouseleave={onMouseOut} onmousemove={onMouseMove}>
	<span class="badgeContent">
		{#if children}
			{@render children()}
		{/if}
	</span>
</span>
{:else}
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="badge" bind:this={element} onmouseenter={onMouseOver} onmouseleave={onMouseOut} onmousemove={onMouseMove}>
	<div class="badgeContent">
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>
{/if}
