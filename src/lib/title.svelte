<script>
	export let title = "Gabi's page";
</script>

<div class="title-container">
	<img src="/pets.svg" alt="paw" />
	<h1>{title}</h1>
</div>

<style>
	.title-container {
		display: flex;
	}

	img {
		width: 50px;
		height: 50px;
	}

	h1 {
		color: black;
		margin-left: 10px;
	}
</style>
