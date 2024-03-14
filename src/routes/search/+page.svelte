<script lang="ts">
	export let data;
	import MangaCard from '$lib/components/manga-card.svelte';
</script>

<div class="grid grid-cols-5 gap-3">
	{#if data}
		{#each data.manga.data as manga}
			<MangaCard manga_data={manga} cover_arts={data.cover_arts[`${manga.id}`]} />
		{/each}
	{/if}
</div>
