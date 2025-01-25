<script>
	import { title } from "$lib/store.js";
	title.set("Buttons!")
	
	import AnnieButton from '$lib/assets/AnnieButton.gif';
	
	const friendsButtons = import.meta.glob(
		'$lib/assets/buttons/friends/*.{gif,jpg,png}',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	)
	const coolSitesButtons = import.meta.glob(
		'$lib/assets/buttons/cool/*.{gif,jpg,png}',
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
			<a href={pathToUrl(_path)} aria-label={_path}><img src={module.default} alt="Go to site:{pathToUrl(_path)}" /></a>
		{/each}
	</div>
</div>

<hr />

<div>
	<h2>Cool sites' buttons!</h2>
	<p>Click on these buttons to go to their page!</p>
	
	<div style:display="flex" style:gap="8px" style:flex-wrap="wrap">
		{#each Object.entries(coolSitesButtons) as [_path, module]}
			<a href={pathToUrl(_path)} aria-label={_path}><img src={module.default} alt="Go to site:{pathToUrl(_path)}" /></a>
		{/each}
	</div>
</div>

<hr />