import { redirect } from '@sveltejs/kit';

export async function load({ params, fetch }) {
	const id = params.id;
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

	const guide = await res.json();

	if (res.ok) {
		return { guide };
	}

	return {
		status: res.status,
		error: new Error(`Could not load guide`)
	};

	// throw redirect('/about/guides');
}
