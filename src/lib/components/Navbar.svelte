<script lang="ts">
	let expanded = false;
	const toggle = () => (expanded = !expanded);
</script>

<nav class="navbar">
	<div class="container">
		<div class="navbar-brand">
			<a class="navbar-item" href="/">
				<img alt="logo" src="https://placehold.co/112x28" />
			</a>
			<button class="navbar-burger" class:is-active={expanded} data-target="nav" on:click={toggle}>
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
