<script>
	export let data;
	const { title, body } = data.guide;
</script>

<div class="guide">
	<h2>{title}</h2>
	<p>{body}</p>
</div>

<style>
	.guide {
		margin-top: 40px;
		padding: 10px;
		border: 1px dotted lightgray;
	}
</style>
