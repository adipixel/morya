import { Categories } from "./songs";
import jsonData from "./data.json";

export function getJsonData() {
  return jsonData as Categories;
}
