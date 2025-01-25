<script>
	const { html } = $props();
</script>

<style>
	img {
		width: 88px;
		height: 31px;
	}
	
	.badge::after {
		content: "";
		position: fixed;
		transform: translate(-88px, -0px);
		width: 88px;
		height: 31px;
		background-color: white;
		pointer-events: none;
		
		-webkit-mask-image: linear-gradient(45deg,rgba(0,0,0,0) 40%,#000 50%,rgba(0,0,0,0) 60%);
		-webkit-mask-size: 800%;
		-webkit-mask-position: 0;
		
		mask-image: linear-gradient(45deg,rgba(0,0,0,0) 40%,#000 50%,rgba(0,0,0,0) 60%);
		mask-size: 800%;
		mask-position: 30%;
	}
	
	.badge:hover::after {
		transition: mask-position 1s ease,-webkit-mask-position 1s ease;
		-webkit-mask-position: 120%;
		mask-position: 120%;
		opacity: 1;
		pointer-events: none;
	}
</style>

<div class="badge">
	{@html html}
</div>