<script lang="ts">
	export let data: any;
</script>

<h1 class="title has-text-white">rally-frontend</h1>

<p>This website connects to the <a href="https://api.rally.noahjutz.com">rally-api.</a></p>

<p>GET / returns: {JSON.stringify(data.hellos)}</p>

<style lang="scss">
	.title::after {
		content: ' (hi from sass!)';
	}
</style>
