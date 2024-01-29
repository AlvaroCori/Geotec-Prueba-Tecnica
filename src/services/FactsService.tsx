import { error } from "console";

export class FactsService{
    private urlResource : any;
    Fact: String;
    constructor(_url : String){
        this.urlResource = _url;
        this.Fact = "";
    }
    async getRequest(){
        let promise = await fetch(this.urlResource)
        .then(response => response.json())
        .catch(error=> {
            console.log(error);
            return new Promise((resolve) => resolve({}));
        });
        return promise;
    }
    loadNewFact(){
        return this.getRequest().then((request)=>{
            if (request["fact"]){
                return this.Fact = request["fact"];
            }
            return this.Fact = "";
        }).catch(error=> {
            console.log(error);
            return "";
        });
    }

}