<script lang="ts">
	import HeroLayout from '$lib/components/HeroLayout.svelte';
	import HomeNavbar from '$lib/components/HomeNavbar.svelte';
	import LoginForm from './LoginForm.svelte';
</script>

<HomeNavbar />

<HeroLayout>
	<div class="column is-4 is-offset-4">
		<h1 class="title is-size-2">Welcome back.</h1>

		<LoginForm />
	</div>
</HeroLayout>
