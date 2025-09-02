<script lang="ts">
	import ImageButton from "./imageButton.svelte";
	import UrlButton from "./urlButton.svelte";

	import { annieButtonData, buttonDataToHtmlString, buttonsFriends } from "./buttons";
	const annieButtonHtmlString = buttonDataToHtmlString(annieButtonData);
	import CopyOnClick from "./copyOnClick.svelte";
	buttonsFriends.sort((a, b) => {
		return a.href.localeCompare(b.href)
	})
</script>
<style>
	.home-friend-button-panel {
		/* width: fit-content; */
		display: flex;
		flex-direction: column;
		height: fit-content;
		justify-content: center;
		/* align-items: center; */
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

<div class="home-friend-button-panel basic-gap">
	<div class="container-bubble">
		<h3>Friends</h3>
		<div class="home-friend-button-list">
			{#each buttonsFriends as buttonData}
			<UrlButton html={buttonDataToHtmlString(buttonData)} />
			{/each}
		</div>
	</div>
	<div class="container-bubble">
		<h3>My button</h3>
		<center>click to copy the html to your clipboard!</center>
		<div class="home-friend-button-list">
			<CopyOnClick stringToCopy={annieButtonHtmlString}>
				<UrlButton html={annieButtonHtmlString} onclick={() => {}} />
			</CopyOnClick>
		</div>
	</div>
</div>