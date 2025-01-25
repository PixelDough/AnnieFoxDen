<script>
	import { title } from "$lib/store.js";
	title.set("Buttons!")
	
	import Button from '$lib/button.svelte';
	import UrlButton from '$lib/urlButton.svelte';
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
	
	const pathToUrl = (path) => {
		return `https://${path.replace(/^.*[\\/]/, '').replace(/\.[^/.]+$/, '')}`;
	}
</script>

<div>
	<h2>My buttons!</h2>
	<p>Feel free to add my button to your page :3</p>
	<img src={AnnieButton} alt="Annie's Button"  />
</div>

<hr />

<div>
	<h2>My friends' buttons!</h2>
	<p>Click on these buttons to go to their page!</p>
	
	<div style:display="flex" style:gap="8px" style:flex-wrap="wrap">
		{#each Object.entries(friendsButtons) as [_path, module]}
			<Button path={_path} imagePath={module.default} />
		{/each}
	</div>
</div>

<hr />

<div>
	<h2>Cool sites' buttons!</h2>
	<p>Click on these buttons to go to their page!</p>
	
	<div style:display="flex" style:gap="8px" style:flex-wrap="wrap">
		{#each Object.entries(coolSitesButtons) as [_path, module]}
			<Button path={_path} imagePath={module.default} />
		{/each}
		<UrlButton html='<a title="Nitrome - Play Free Games" href="http://www.nitrome.com"><img width="88px" height="31px" src="https://nitrome.com/images/links/nitrome-link.png"/></a>' />
		<UrlButton html='<a href="https://angelinmyhead.nekoweb.org/"><img src="https://dl.dropbox.com/scl/fi/oywze0923d21xbdgh2hve/barcodeaimh.gif?rlkey=vp91ch8orfjcc45e92rtpy2if&st=ohoawsnr&raw=1"></a>' />
	</div>
</div>

<hr />