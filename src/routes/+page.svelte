<script>
	import FriendButtonList from "$lib/friendButtonList.svelte";
	import HoverObject from "$lib/hoverObject.svelte";
	import ImageButton from "$lib/imageButton.svelte";
	import PortfolioButton from "$lib/portfolioButton.svelte";
	import PortfolioThumbnail from "$lib/portfolioThumbnail.svelte";
	import SeoHeader from "$lib/seoHeader.svelte";
	import { title } from "$lib/store.js";
	import UrlButton from "$lib/urlButton.svelte";
	import Marquee from "svelte-fast-marquee";
	title.set("Annie's Den")

	const recentGameSlug = "deep-space-bellhop"

</script>
<style>

	.home-column {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.hbox {
		display: flex;
		flex-direction: row;
	}

	.wrap {
		flex-wrap: wrap;
	}

	.minwidth {
		min-width: 30ch;
	}

	.center-contents {
		align-items: center;
		align-content: center;
		justify-content: center;
		justify-items: center;
		text-align: center;
	}

	@media only screen and (max-width: 500px) {
		.hbox {
			/* flex-direction: column; */
			flex-wrap: wrap;
		}
	}

	:global(.marquee-container) {
		overflow: visible;
		overflow-y: visible;
	}
	:global(.marquee) {
		overflow: visible;
		overflow-y: visible;
	}
</style>

<SeoHeader title="Annie's Den" />

<div class="home-column basic-gap">
	<div class="hbox basic-gap">
		<div class="home-column basic-gap">
			<!-- welcome -->
			<div class="container-bubble minwidth">
				<h2 class="text-welcome">Welcome to my webpage!</h2>
				<p>Check out the links in the header to read my blog, or learn more about my various projects!</p>
			</div>
			<div class="hbox wrap basic-gap">
				<!-- about -->
				<div class="container-bubble minwidth">
					<h2>About Me</h2>
					<p>Hi! I'm Annalise, but you can just call me Annie though!</p>
					<p>I'm a trans, furry game dev and programmer, and I've been designing games since 2015!</p>
					<p>My most popular project was "<a href="https://pixeldough.itch.io/start-survey">Start Survey?</a>" (maybe you've played it?), but my most recent project is <a href="/portfolio/games/deep-space-bellhop/">Deep Space Bellhop</a>! (^_-)-☆</p>

					<p>Here's a couple links to teams I am a part of!</p>
					<ul>
						<li><a href="https://umeyu.me">UmeYume</a></li>
						<li><a href="https://parallas.dev">parallas</a></li>
					</ul>
				</div>
				<!-- tools -->
				<div class="container-bubble minwidth">
					<h2>Tools</h2>
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
			<div class="container-bubble center-contents hbox">
				<div style:width="fit-content">
					<h3>My most recent game!</h3>
					<div style:max-width="300px">
						<PortfolioButton slug={recentGameSlug} title={""} />
					</div>
				</div>
			</div>
		</div>
		<div class="basic-side-bar basic-gap">
			<FriendButtonList />
			<div class="container-bubble center-contents">
				<h3>Follow me on Nekoweb!</h3>
				<iframe src="https://nekoweb.org/frame/follow" title="Follow me on Nekoweb!" frameborder="0" width="170" height="28"></iframe>
			</div>
		</div>
	</div>
</div>