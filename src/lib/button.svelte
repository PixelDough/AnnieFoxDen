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
			element.children[0].style.filter = `brightness(${brightness}) drop-shadow(${-xoff * 4}px ${-yoff * 4}px 0px black)`;
		}
	}
</script>

<style>
	.badge::before {
		
	}
	.badge {
		width: 88px;
		height: 31px;
		
		perspective: 10cm;
		display: block;
		width: 88px;
		height: 31px;
		
		position: relative;
		z-index: 0;
	}
	.badge img:hover {
		filter: brightness(1.1);
	}
	.badgeContent::after {
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
	
	.badgeContent:hover::after {
		transition: mask-position 1s ease,-webkit-mask-position 1s ease;
		-webkit-mask-position: 120%;
		mask-position: 120%;
		opacity: 1;
	}
	
	.badge:hover {
		z-index: 1000;
	}
	
	.badgeContent {
		transition-duration: 0.05s;
		will-change: transform;
		image-rendering: pixelated;
		position: static;
		transform-style: preserve-3d;
	}
	
	.badgeContent:hover {
		filter: brightness(1.1);
	}
</style>

<div class="badge" bind:this={element} onmouseenter={onMouseOver} onmouseleave={onMouseOut} onmousemove={onMouseMove}>
	<div class="badgeContent">
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>