<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import SignupForm from './SignupForm.svelte';
</script>

<Navbar />

<section class="hero is-fullheight-with-navbar">
	<div class="hero-body">
		<div class="container is-max-desktop">
			<h1 class="title">Welcome to rally.</h1>

			<SignupForm />
		</div>
	</div>
</section>
