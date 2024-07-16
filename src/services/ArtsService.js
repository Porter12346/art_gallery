import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"

class ArtsService{

    getArts() {
        const arts = api.get('api/artworks')
        console.log(arts);
    }

}
export const artsService = new ArtsService()