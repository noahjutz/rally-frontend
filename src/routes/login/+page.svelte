<script lang="ts">
	import HeroLayout from '$lib/components/HeroLayout.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import LoginForm from './LoginForm.svelte';
</script>

<Navbar />

<HeroLayout>
	<div class="column is-4 is-offset-4">
		<h1 class="title is-size-1">Welcome back.</h1>

		<LoginForm />
	</div>
</HeroLayout>
