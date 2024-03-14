

<script lang="ts">
	import type { MangaData } from '$lib/types/manga';

    interface Data{
        manga:{
            data:MangaData
        }
    }
    export let data:Data;
    console.log(data)
    let manga_data=data.manga.data;
</script>


<div>
    <h1>{manga_data.id}</h1>
    <h1>{manga_data.type}</h1>
    <h1>{manga_data.attributes.status}</h1>
    <p>{manga_data.attributes.description.en}</p>
    
</div>