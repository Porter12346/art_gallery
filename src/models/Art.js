export class Art{
    constructor(data){
        this.urlNormal = data.imgUrls.small
        this.urlLarge = data.imgUrls.raw
        this.description = data.description
        this.id = data.id
    }
}