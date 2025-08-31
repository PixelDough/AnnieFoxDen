<script>
	import ContainerBubble from "$lib/containerBubble.svelte";
	import P from "$lib/mdsvex_layout/components/p.svelte";
	import SeoHeader from "$lib/seoHeader.svelte";
	import { title } from "$lib/store.js";
	title.set("Annie's Den")
</script>
<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	p {
		margin-top: 0;
	}
</style>

<SeoHeader title="Annie's Den" />

<ContainerBubble>
	<p>Welcome to my webpage! Check out the links in the header to learn more about me!</p>
	<p>Here's a couple links to teams I am a part of!</p>
	<ul>
		<li><a href="https://umeyu.me">UmeYume</a></li>
		<li><a href="https://parallas.dev">parallas</a></li>
	</ul>
</ContainerBubble>

<ContainerBubble>
	<p>Using Nekoweb? Follow me with the button below!</p>
	<iframe src="https://nekoweb.org/frame/follow" title="Follow me on Nekoweb!" frameborder="0" width="170" height="28"></iframe>
</ContainerBubble>