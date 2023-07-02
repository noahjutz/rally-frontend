<script lang="ts">
	export let data;

	const token = data.token;
	const decoded = data.decoded;
</script>

<h1 class="title">Dashboard</h1>

<p>If you are seeing this, you are logged in. Your token is: {token}</p>

<p>Your decoded token is: {JSON.stringify(decoded)}</p>
