<script lang="ts">
	export let data: any;

	let expanded = false;
	const toggle = () => (expanded = !expanded);
</script>

<section class="hero is-primary is-fullheight">
	<div class="hero-head">
		<nav class="navbar">
			<div class="container">
				<div class="navbar-brand">
					<a class="navbar-item" href="/">
						<img alt="logo" src="https://placehold.co/112x28" />
					</a>
					<button
						class="navbar-burger"
						class:is-active={expanded}
						data-target="nav"
						on:click={toggle}
					>
						<span /> <span /> <span />
					</button>
				</div>

				<div id="nav" class="navbar-menu" class:is-active={expanded}>
					<div class="navbar-end">
						<div class="navbar-item">
							<div class="buttons">
								<a class="button is-primary" href="/signup"> <strong>Sign up</strong> </a>
								<a class="button is-light" href="/login"> Log in </a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</div>

	<div class="hero-body">
		<div class="container has-text-centered">
			<div>
				<p class="title">rally-frontend</p>

				<p class="subtitle">
					This website connects to the <a href="https://api.rally.noahjutz.com">rally-api.</a>
				</p>

				<p>GET / returns: {JSON.stringify(data.hellos)}</p>
			</div>
		</div>
	</div>
</section>
