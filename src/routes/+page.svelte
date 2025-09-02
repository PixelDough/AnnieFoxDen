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

	const recentGameSlug = "/portfolio/games/deep-space-bellhop"

	const coolSitesButtons = import.meta.glob(
		'$lib/assets/buttons/cool/*.{gif,png,jpg,jpeg,PNG,JPEG}',
		{
			eager: true,
			as: 'url',
		}
	);

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
	<center>check out these cool sites!</center>
	<div class="container-bubble">
		<Marquee pauseOnHover={true} speed={50} play={true} gap="8px" style="margin-top:-20px; margin-bottom:-20px; padding-top:20px; padding-bottom:20px; overflow-x: clip; mask-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 1) 90%, rgba(255, 255, 255, 0) 100%);">
			{#each Object.entries(coolSitesButtons) as [_path, module]}
				<ImageButton path={_path} imagePath={module} />
			{/each}
			<UrlButton html='<a title="melonking" href="https://melonking.net"><img width="88px" height="31px" src="https://melonking.net/images/badges/MELON-BADGE-2.GIF"/></a>' />
			<UrlButton html='<a title="melonland" href="https://melonland.net"><img width="88px" height="31px" src="https://melonland.net/images/melonland-badge-2.gif"/></a>' />
			<UrlButton html='<a href="https://hyphin.net"><img src="https://hyphin.net/Assets/Images/HyphButtonLow.gif" alt="hyphin dot net" width="88" height="31"></a>' />
			<UrlButton html='<a title="Nitrome - Play Free Games" href="http://www.nitrome.com"><img width="88px" height="31px" src="https://nitrome.com/images/links/nitrome-link.png"/></a>' />
			<UrlButton html='<a title="rubybulbs" href="https://rubybulbs.nekoweb.org"><img width="88px" height="31px" src="https://rubybulbs.nekoweb.org/img/newbutt.png"/></a>' />
			<UrlButton html='<a href="https://angelinmyhead.nekoweb.org/"><img src="https://dl.dropbox.com/scl/fi/oywze0923d21xbdgh2hve/barcodeaimh.gif?rlkey=vp91ch8orfjcc45e92rtpy2if&st=ohoawsnr&raw=1"></a>' />
			<UrlButton html='<a href="https://heckscaper.com/"><img src="https://heckscaper.com/data/buttons/msx8831.gif"></a>' />
			<UrlButton html='<a href="http://mileshouse.neocities.org" data-alt=""><img src="https://mileshouse.neocities.org/img/kiophen8831.gif"></a>' />
			<UrlButton html='<a href="https://dimden.dev/"><img src="https://dimden.dev/services/images/88x31.gif"></a>' />
			<UrlButton html='<a href="https://bang1338.nekoweb.org"><img src="https://bang1338.nekoweb.org/bang1338.gif" style="width: 88px;"></a>' />
			<UrlButton html='<a href=https://maddoxxing.neocities.org/><img src="https://maddoxxing.nekoweb.org/graphics/button3.gif"></a>' />
			<UrlButton html='<a href="http://openbooks.neocities.org"><img src="https://openbooks.neocities.org/img/88x31.gif" height="31" width="88" style="image-rendering:pixelated;"/></a>' />
			<UrlButton html='<a title="Chataigne Online" href="https://chataigne.nekoweb.org/"><img width="88px" height="31px" src="https://chataigne.nekoweb.org/button1.jpg"/></a>' />
			<UrlButton html='<a title="Your new vacation location!" href="https://melonsoda.nekoweb.org"><img width="88px" height="31px" src="https://melonsoda.nekoweb.org/images/button.gif"/></a>' />
		</Marquee>
	</div>
</div>