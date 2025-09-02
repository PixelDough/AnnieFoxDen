<script lang="ts">
	import ImageButton from "./imageButton.svelte";
	import UrlButton from "./urlButton.svelte";

	const friendsButtons = import.meta.glob(
		'$lib/assets/buttons/friends/*.{gif,png,jpg,jpeg,PNG,JPEG}',
		{
			eager: true,
			as: 'url',
		}
	);
</script>
<style>
	.home-friend-button-panel {
		/* width: fit-content; */
		height: fit-content;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	.home-friend-button-list {
		/* width: fit-content; */
		max-width: 100%;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		gap: 8px;
	}

	@media only screen and (max-width: 500px) {
		.home-friend-button-list {
			flex-direction: row;
			flex-wrap: wrap;
		}
	}
</style>

<div class="home-friend-button-panel">
	<div class="container-bubble">
		<h3>Friends</h3>
		<div class="home-friend-button-list">
			{#each Object.entries(friendsButtons) as [_path, module]}
				<ImageButton path={_path} imagePath={module} />
			{/each}
			<UrlButton html='<a title="bellets :-DD" href="https://bellets.me"><img width="88px" height="31px" src="https://bellets.me/assets/bellets.gif"/></a>' />
			<UrlButton html='<a href="https://racc.at/"><img src="https://racc.at/media/uploads/88x31.png" alt="Ketts site!"/></a>' />
			<UrlButton html='<a href="https://axoga.to/"><img src="https://axoga.to/images/stamps/chai.png" alt="Chais site!"/></a>' />
			<UrlButton html='<a href="https://compactbunker.org"><img src="https://compactbunker.org/blinkies/personal.gif"></a>' />
			<UrlButton html='<a href="https://puddingpudd.com"><img src="https://puddingpudd.com/buttons/Pudd_Button.gif" width="88" height="31"></a>' />
			<UrlButton html='<a href="https://mimiya.nekoweb.org"><img src="https://mimiya.nekoweb.org/button.png" width="88" height="31"></a>' />
		</div>
	</div>
</div>