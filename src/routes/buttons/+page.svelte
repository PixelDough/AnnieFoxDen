<script>
	import { title } from "$lib/store.js";
	title.set("Buttons!")
	
	import Button from '$lib/button.svelte';
	import ImageButton from '$lib/imageButton.svelte';
	import UrlButton from '$lib/urlButton.svelte';
	import CopyOnClick from '$lib/copyOnClick.svelte';
	import AnnieButton from '$lib/assets/AnnieButton.gif';
	
	const friendsButtons = import.meta.glob(
		'$lib/assets/buttons/friends/*.gif',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	)
	const coolSitesButtons = import.meta.glob(
		'$lib/assets/buttons/cool/*.gif',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	)
	const funButtons = import.meta.glob(
		'$lib/assets/buttons/fun/*.{gif,png,jpg}',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	)
	
	const anniesButtonHtml = `<a title="Annie's Fox Den" href="http://anniesden.dev"><img width="88px" height="31px" src="https://anniesden.dev/_app/immutable/assets/AnnieButton.C3RtSden.gif"/></a>`;
</script>

<style>
	h2 {
		margin-top: 24px;
		margin-bottom: 12px;
		text-align: center;
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

<div>
	<h2>My buttons!</h2>
	<p>Click to copy the html to your clipboard!</p>
	<div class="buttonList">
		<CopyOnClick stringToCopy={anniesButtonHtml}>
			<UrlButton html={anniesButtonHtml} onclick={() => {}} />
		</CopyOnClick>
	</div>
</div>

<div>
	<h2>Friends sites!</h2>
	<!-- <p>Click on these buttons to go to their page!</p> -->
	
	<div class="buttonList">
		{#each Object.entries(friendsButtons) as [_path, module]}
			<ImageButton path={_path} imagePath={module.default} />
		{/each}
	</div>
</div>

<div>
	<h2>Cool sites!</h2>
	<!-- <p>Click on these buttons to go to their page!</p> -->
	
	<div class="buttonList">
		{#each Object.entries(coolSitesButtons) as [_path, module]}
			<ImageButton path={_path} imagePath={module.default} />
		{/each}
		<UrlButton html='<a title="Nitrome - Play Free Games" href="http://www.nitrome.com"><img width="88px" height="31px" src="https://nitrome.com/images/links/nitrome-link.png"/></a>' />
		<UrlButton html='<a href="https://angelinmyhead.nekoweb.org/"><img src="https://dl.dropbox.com/scl/fi/oywze0923d21xbdgh2hve/barcodeaimh.gif?rlkey=vp91ch8orfjcc45e92rtpy2if&st=ohoawsnr&raw=1"></a>' />
		<UrlButton html='<a href="https://heckscaper.com/"><img src="https://heckscaper.com/data/buttons/msx8831.gif"></a>' />
		<UrlButton html='<a href="http://mileshouse.neocities.org" data-alt=""><img src="http://mileshouse.neocities.org/img/kiophen8831.gif"></a>' />
	</div>
</div>

<div>
	<h2>Decorative!</h2>
	<!-- <p>This is my button collection! No links here!</p> -->
	
	<div class="buttonList">
		{#each Object.entries(funButtons) as [_path, module]}
			<ImageButton imagePath={module.default} />
		{/each}
	</div>
</div>