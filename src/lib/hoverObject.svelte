<script>
	const { children } = $props();
	
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
		const xoff = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 2;
		const yoff = ((e.clientY - rect.top - rect.height / 2) / rect.height) * 2;
		const transform = `translate3d(0, 0, 3.0cm) rotate3d(${-yoff}, ${xoff}, 0, ${Math.sqrt(xoff * xoff + yoff * yoff) * 30}deg)`;
		const brightness = 1.0 - yoff / 4 - xoff / 4;
		
		if (element.children[0]) {
			element.children[0].style.transform = transform;
			element.children[0].style.filter = `brightness(${brightness}) drop-shadow(${-xoff * 4.0}px ${-yoff * 4.0}px 0px black)`;
		}
	}
</script>

<style>
	.badge::before {
		
	}
	.badge {
		perspective: 20cm;
		display: block;
		
		position: relative;
		z-index: 0;
	}
	.badge img:hover {
		filter: brightness(1.1);
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
		position: absolute;
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

<div class="badge" bind:this={element} onmouseenter={onMouseOver} onmouseleave={onMouseOut} onmousemove={onMouseMove}>
	<div class="badgeContent">
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>