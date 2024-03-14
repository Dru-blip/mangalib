

import {get_cover_art_list, search_manga} from "$lib/api/manga.js"

export async function load({url}){
    let data=await search_manga(url.searchParams.get("title") as string)
    let cover_art=await get_cover_art_list(data.data)
    return {
        manga:data,
        cover_arts:cover_art
    }
}