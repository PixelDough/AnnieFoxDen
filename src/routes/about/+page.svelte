<script>
	
	import SeoHeader from "$lib/seoHeader.svelte";
	import { title } from "$lib/store.js";
	title.set("About")
</script>

<SeoHeader title="About" />

<div class="basic-column basic-gap">
	<div class="container-bubble">
		<h2>About Me</h2>
		<p>Hi! I'm Annalise, but you can just call me Annie though!</p>
		<p>I'm a trans, furry game dev and programmer, and I've been designing games since 2015!</p>
		<p>My most popular project was probably "<a href="https://pixeldough.itch.io/start-survey">Start Survey?</a>" (maybe you've played it?), but my most recent project is <a href="/portfolio/games/deep-space-bellhop/">Deep Space Bellhop</a>! (^_-)-☆</p>

		<p>Here's a couple links to teams I am a part of!</p>
		<ul>
			<li><a href="https://umeyu.me">UmeYume</a></li>
			<li><a href="https://parallas.dev">parallas</a></li>
		</ul>
	</div>
	<div class="container-bubble">

		<h2>Heres some tools I'm experienced with!</h2>
		<h3>Game Dev</h3>
		<ul>
			<li>MonoGame</li>
			<li>Unity 3D</li>
			<li>Godot (Mono)</li>
			<li>Jetbrains Rider</li>
		</ul>
		<h3>Music</h3>
		<ul>
			<li>Logic Pro</li>
			<li>Audacity</li>
		</ul>
		<h3>3D Art</h3>
		<ul>
			<li>Blender</li>
			<li>Substance Painter</li>
		</ul>
	</div>
</div>