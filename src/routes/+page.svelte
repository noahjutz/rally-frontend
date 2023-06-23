<script lang="ts">
	export let data: any;

	import Navbar from '$lib/components/Navbar.svelte';
</script>

<section class="hero is-primary is-fullheight">
	<div class="hero-head">
		<Navbar />
	</div>

	<div class="hero-body">
		<div class="container has-text-centered">
			<div>
				<p class="title">rally-frontend</p>

				<p class="subtitle">
					This website connects to the <a href="https://api.rally.noahjutz.com">rally-api.</a>
				</p>

				<p>GET / returns: {JSON.stringify(data.hellos)}</p>
			</div>
		</div>
	</div>
</section>
