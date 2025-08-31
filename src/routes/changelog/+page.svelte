<script>
	import ContainerBubble from "$lib/containerBubble.svelte";
	import { title } from "$lib/store.js";
	title.set("Changelog")
</script>

<style>
	h3 {
		margin-top: 0;
	}
</style>

<ContainerBubble>
	<h6>Note: Format is yy-mm-dd</h6>
</ContainerBubble>

<ContainerBubble>
	<h3>25-08-30</h3>
	<ul>
		<li>Created my RSS feed for my blog! (https://anniesden.dev/rss.xml)</li>
	</ul>

	<h3>25-07-25</h3>
	<ul>
		<li>Started my blog!</li>
	</ul>

	<h3>25-04-15</h3>
	<ul>
		<li>Updated About Me</li>
		<li>Added game to portfolio: "Deep Space Bellhop"</li>
		<li>Added threejs background with blur</li>
		<li>Fixed gif buttons not playing</li>
	</ul>

	<h3>25-02-15</h3>
	<ul>
		<li>Updated About Me</li>
		<li>Updated portfolio links</li>
	</ul>

	<h3>25-02-02</h3>
	<ul>
		<li>Added music</li>
		<li>Added more buttons</li>
	</ul>

	<h3>25-01-29</h3>
	<ul>
		<li>Added portfolio pages for Bugbounce, Moonlit Sonata, Sub VR, and Night Knight</li>
	</ul>

	<h3>25-01-26</h3>
	<ul>
		<li>Added email to contact page</li>
		<li>Added Portfolio page</li>
		<li>Added "Codename - Sugar Plum Fairy" to the Games Portfolio</li>
		<li>Fixed issue with buttons not shimmering on firefox based browsers</li>
	</ul>

	<h3>25-01-25</h3>
	<ul>
		<li>Refactored buttons</li>
		<li>Redesigned buttons page</li>
		<li>Added a bunch of fun decorative buttons</li>
		<li>Added more friend site and cool site buttons</li>
		<li>Made my button copy the html to the clipboard</li>
		<li>Updated About page with tools lists</li>
	</ul>

	<h3>25-01-24</h3>
	<ul>
		<li>Added "About", "Todo", "Buttons", and "Changelog" pages</li>
		<li>Adjusted page styles to minimize CLS</li>
		<li>Reworked header</li>
		<li>Added buttons for bscit and mookalh</li>
		<li>Added section for cool site buttons</li>
	</ul>
</ContainerBubble>