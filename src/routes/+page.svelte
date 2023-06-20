<script lang="ts">
	export let data: any;
</script>

<style lang="scss">
	:global(body, html) {
		background-color: rgb(206, 208, 249);
		height: 100%;
	}
</style>

<h1 class="title has-text-white">rally-frontend</h1>

<p>This website connects to the <a href="https://api.rally.noahjutz.com">rally-api.</a></p>

<p>GET / returns: {JSON.stringify(data.hellos)}</p>

