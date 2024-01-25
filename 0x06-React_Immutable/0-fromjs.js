import { fromJS } from "./node_modules/immutable/dist/immutable";
export function getImmutableObject(object){
  const map = fromJS(object);
  return map;
}