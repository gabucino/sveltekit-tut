<script>
	export let data;
</script>

<div class="guides">
	<ul>
		{#each data.guides as guide}
			<li><a sveltekit:prefetch href="/about/guides/{guide.id}">{guide.title}</a></li>
		{/each}
	</ul>
</div>

<style>
	.guides {
		text-align: center;
		display: block;
		margin: 20px auto;
		background: purple;
	}

	ul {
		list-style-type: none;
	}

	li {
		color: white;
	}
</style>
