<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />

<section class="hero is-fullheight-with-navbar">
	<div class="hero-body">
		<div class="container is-max-desktop">
			<h1 class="title">Welcome to rally.</h1>

			<form>
				<div class="field">
					<p class="control">
						<input class="input is-medium" type="text" placeholder="Username" />
					</p>
				</div>
				<div class="field">
					<p class="control">
						<input class="input is-medium" type="password" placeholder="Password" />
					</p>
				</div>
				<div class="field">
					<p class="control">
						<button class="button is-primary is-large">Sign up</button>
					</p>
				</div>
			</form>
		</div>
	</div>
</section>
