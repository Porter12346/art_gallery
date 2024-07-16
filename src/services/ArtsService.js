import { AppState } from "../AppState.js"
import { Art } from "../models/Art.js";
import { api } from "./AxiosService.js"

class ArtsService {
    async admireActiveArt() {
        let response = await api.post(`api/artworks/${AppState.activeArt.id}`, )
        console.log(response);
    }

    async getArtById(id) {
        const response = await api.get(`api/artworks/${id}`)
        console.log(response.data);
        let activeArt = new Art(response.data)
        AppState.activeArt = activeArt
    }

    async getArts(page) {
        const response = await api.get(`api/artworks?page=${page}`)
        console.log("📡🖼️");
        let arts = response.data.artworks.map((artData) => new Art(artData))
        if (AppState.page == 1) {
            AppState.arts = arts
        }
        else {
            AppState.arts = AppState.arts.concat(arts)
        }
        AppState.page++

    }

}
export const artsService = new ArtsService()