

<script lang="ts">
    export let manga_data:any
    export let cover_arts:string

	import { goto } from "$app/navigation";
    import * as  Card from "$lib/components/ui/card";
	import { Button } from "./ui/button";

    let cover_url:string="https://uploads.mangadex.org/covers/"+`${manga_data.id}/${cover_arts}`

    function go_to_link(){
        goto(`/manga/${manga_data.id}`);
    }
   
</script>


    <!-- class={`bg-[url(${})]`} -->
<Card.Root >
<Card.Header>
    <Card.Title>{manga_data.attributes.title.en}</Card.Title>
</Card.Header>
<Card.Content class="flex justify-between">

    <img style="height:100%;"  class="w-1/2 rounded" src={`${cover_url}`} alt={manga_data.attributes.title.en}/>
    <!-- <Card.Text>{data.description}</Card.Text> -->
</Card.Content>
<Card.Footer class="flex flex-col items-start">
    <Button variant="outline" class="w-1/2 mb-2" on:click={go_to_link}>Info</Button>
    <Button  class="w-1/2">Read</Button>
</Card.Footer>
</Card.Root>

