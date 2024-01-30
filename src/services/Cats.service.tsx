import {CatModel} from "../Models/CatModel";
export class CatsService{
    private urlResource : any;
    private url: String;
    Fact: String;
    constructor(urlResource : String){
        this.urlResource = urlResource;
        this.url = this.urlResource.split("?", 1)[0] + "/";
        this.Fact = "";
    }
    async getRequest(){
        let promise = await fetch(this.urlResource)
        .then((response) => {
            return response.json();
        })
        .catch(error=> {
            console.log(error);
            return new Promise((resolve) => resolve({}));
        });
        return promise;
    }
    getNewCat(){
        return this.getRequest().then((request)=>{
            if (request["_id"]){
                return this.url + request["_id"];
            }
            return "";
        }).catch(error=> {
            console.log(error);
            return "";
        });
    }

}