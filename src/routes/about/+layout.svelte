<script>
	import Title from '$lib/title.svelte';
	import '../../styles/global.css';
</script>

<header>
	<Title title="CherryCode" />
</header>
<main>
	<slot />
</main>
<footer>
	<p>Copyright 2024</p>
</footer>

<style>
	header {
		background: #ff6f61;
		padding: 20px;
		text-align: center;
	}

	main {
		padding: 20px;
		max-width: 960px;
	}

	footer {
		background: #ff6f61;
		padding: 20px;
		text-align: center;
	}
</style>
