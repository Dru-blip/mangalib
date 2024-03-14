<script lang="ts">
	import { goto } from "$app/navigation";
    import { Button } from "$lib/components/ui/button";

    import { Input } from "$lib/components/ui/input";
    import { Label } from "$lib/components/ui/label";
	import { redirect } from "@sveltejs/kit";


    let search_query="";

    const search_for_managa=()=>{
      if(search_query){
        goto(`/search?title=${search_query}`);
      }
      
    }

  </script>
   
<div class="flex justify-center items-center h-1/2">
  <div class="flex justify-center  w-1/2">
    <Input bind:value={search_query} class="w-1/2 h-12 mr-4"/>
    
    <Button  on:click={search_for_managa} class="h-12">
      Search
    </Button>
    
   </div>
</div>
