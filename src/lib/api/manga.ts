import type { MangaData } from "$lib/types/manga"

const BASE_URL="https://api.mangadex.org"



export async function get_chapters(manga_id:string){
    return (await fetch(`${BASE_URL}/manga/${manga_id}/feed`)).json()
}

export async function search_manga(search_query:string){
    return (await fetch(`${BASE_URL}/manga?title=${search_query}`)).json()
}



export async function fetch_manga(manga_id:string):Promise<MangaData>{
    return (await fetch(`${BASE_URL}/manga/${manga_id}`)).json()
}

export async function find_cover_art(relationships:any){
    let id:string=""
    for (const relationship of relationships){
        if (relationship.type=="cover_art"){
            id= relationship.id
            break
        }
    }

    let data=await (await fetch(`${BASE_URL}/cover/${id}`)).json()
    return data.data.attributes.fileName
}


export async function get_cover_art_list(manga_list:any){
    let cover_art_list:any={}
    for(const manga of manga_list){
        cover_art_list[`${manga.id}`]=await find_cover_art(manga.relationships)
    }
    
    return cover_art_list
}


