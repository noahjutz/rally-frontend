<script lang="ts">
	import { goto } from '$app/navigation';

	let username: String;
	let password: String;

	const submit = async (e: SubmitEvent) => {
		// todo login with api

		goto('/dashboard');
	};
</script>

<form on:submit|preventDefault={submit}>
	<div class="field">
		<p class="control">
			<input
				class="input is-medium"
				name="username"
				type="text"
				bind:value={username}
				placeholder="Username"
			/>
		</p>
	</div>
	<div class="field">
		<p class="control">
			<input
				class="input is-medium"
				name="password"
				type="password"
				bind:value={password}
				placeholder="Password"
			/>
		</p>
	</div>
	<div class="field">
		<p class="control">
			<button class="button is-primary is-large">Log in</button>
		</p>
	</div>
</form>
