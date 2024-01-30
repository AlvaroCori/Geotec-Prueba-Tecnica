export class CatModel{
    public url: string;
    public name: string;
    public fact: string;
    constructor(url: string, name: string, fact: string = "") {
      this.url = url;
      this.name = name;
      this.fact = fact;
    }
  }