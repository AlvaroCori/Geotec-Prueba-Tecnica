import { List } from "@material-ui/core";
import { CatModel } from "./Models/CatModel";

const PATHS: { [key: string]: any } = {};

PATHS.RANDOM_CAT = 'https://cataas.com/cat';
PATHS.GET_CAT = 'https://cataas.com/cat?json=true';
PATHS.RANDOM_CAT_SQUARE = PATHS.RANDOM_CAT + '?type=square';
PATHS.RANDOM_FACT = 'https://catfact.ninja/fact';
export default PATHS;

export var CATS: CatModel[] = [];
