<script lang="ts">
	import { goto } from '$app/navigation';

	const submit = async (e: SubmitEvent) => {
		const data = new FormData(e.target as HTMLFormElement);
		const username = data.get('username');
		const password = data.get('password');

		// todo login with api

		goto('/dashboard');
	};
</script>

<form on:submit|preventDefault={submit}>
	<div class="field">
		<p class="control">
			<input class="input is-medium" name="username" type="text" placeholder="Username" />
		</p>
	</div>
	<div class="field">
		<p class="control">
			<input class="input is-medium" name="password" type="password" placeholder="Password" />
		</p>
	</div>
	<div class="field">
		<p class="control">
			<button class="button is-primary is-large">Log in</button>
		</p>
	</div>
</form>
