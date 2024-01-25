import { Map } from "./node_modules/immutable/dist/immutable";
const getImmutableObject = (object) => Map(object);
module.exports = getImmutableObject;