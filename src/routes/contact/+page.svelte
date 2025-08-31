<script>
	
	import SeoHeader from "$lib/seoHeader.svelte";
	import { title } from "$lib/store.js";
	title.set("Contact")
</script>

<SeoHeader title="Contact" />

<div class="container-bubble">
	<h2>Here's a few ways you can contact me!</h2>
	<p>Email: <a href="mailto:webmistress@anniesden.dev">webmistress@anniesden.dev</a></p>
	<p>Bluesky: <a href="https://bsky.app/profile/anniesden.dev">@anniesden.dev</a></p>
	<p>Discord: pixeldough</p>
	<p>Signal: Annie.1337</p>
</div>