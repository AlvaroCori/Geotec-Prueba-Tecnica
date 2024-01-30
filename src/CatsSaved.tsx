import { CatModel } from "./Models/CatModel";

export default class Cats{
    private cats : CatModel[] ;
    constructor(){
        this.cats = [];
        let catsString = localStorage.getItem("cats");
        if (catsString == null){
            localStorage.setItem("cats", JSON.stringify(this.cats));
        }
        else{
            this.cats = JSON.parse(catsString);
        }
    }
    addCat(cat: CatModel){
        this.cats.push(cat);
        localStorage.setItem("cats", JSON.stringify(this.cats));
    }
    getCats(){
        return this.cats;
    }
}