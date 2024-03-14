import { fetch_manga, get_chapters } from '$lib/api/manga.js';


export async function load({params}){
    let data=await fetch_manga(params.id);
    let chapters=await get_chapters(params.id);

    return {
        manga:data,
        chapters:chapters
    }
}