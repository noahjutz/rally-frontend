<script lang="ts">
	import HeroLayout from '$lib/components/HeroLayout.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import SignupForm from './SignupForm.svelte';
</script>

<Navbar />

<HeroLayout>
	<div class="column is-4 is-offset-4">
		<h1 class="title is-size-2">Welcome to rally.</h1>

		<SignupForm />
	</div>
</HeroLayout>
