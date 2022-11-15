import cities from "../../data/cities.json"
import { City } from "../../config/types";

export async function getAll() : Promise<Array<City>>{
    return cities;
}