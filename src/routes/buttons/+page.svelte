<script>
	import { title } from "$lib/store.js";
	title.set("Buttons!")
	
	import AnnieButton from '$lib/assets/AnnieButton.gif';
	import CopyOnClick from '$lib/copyOnClick.svelte';
	import ImageButton from '$lib/imageButton.svelte';
	import UrlButton from '$lib/urlButton.svelte';
	import SeoHeader from "$lib/seoHeader.svelte";
	
	const funButtons = import.meta.glob(
		'$lib/assets/buttons/fun/*.{gif,png,jpg,jpeg,PNG,JPEG}',
		{
			eager: true,
			as: 'url',
		}
	);
	
	const anniesButtonHtml = `<a title="Annie's Fox Den" href="http://anniesden.dev"><img width="88px" height="31px" src="https://anniesden.dev/_app/immutable/assets/AnnieButton.C3RtSden.gif"/></a>`;
</script>

<style>
	h2 {
		text-align: center;
		margin-bottom: 12px;
	}
	p {
		margin-top: 4px;
		color: #af91f4;
		font-style: italic;
		padding-top: 0;
		text-align: center;
	}
	div.buttonList {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
		justify-content: center;
		flex-direction: row;
	}
	img {
		cursor: pointer;
	}
</style>

<SeoHeader title="Buttons" />

<div class="basic-column basic-gap">
	<div class="container-bubble">
		<div>
			<h2>Cool sites!</h2>
			<!-- <p>Click on these buttons to go to their page!</p> -->
			
			<div class="buttonList">
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
			</div>
		</div>
	</div>

	<div class="container-bubble">
		<div>
			<h2>Decorative!</h2>
			<!-- <p>This is my button collection! No links here!</p> -->
			
			<div class="buttonList">
				{#each Object.entries(funButtons) as [_path, module]}
					<ImageButton imagePath={module} />
				{/each}
			</div>
		</div>
	</div>

	<div style:margin-top="32px" style:text-align="center">
		<h6><a href="https://gist.github.com/KettLovahr/a459e8e9824880f9e038cd424d9c80c1">Button styles</a> made with the help of <a href="https://racc.at/">Kett</a>!</h6>
	</div>
</div>