<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import SignupForm from './SignupForm.svelte';
</script>

<Navbar />

<section class="hero is-fullheight-with-navbar">
	<div class="hero-body">
		<div class="container">
			<div class="columns">
				<div class="column is-4 is-offset-4">
				<h1 class="title is-size-1">Welcome to rally.</h1>

					<SignupForm />
				</div>
			</div>
		</div>
	</div>
</section>
