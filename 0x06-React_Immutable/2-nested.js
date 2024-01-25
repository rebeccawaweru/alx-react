import { getIn, fromJS } from "./node_modules/immutable/dist/immutable";

export function accessImmutableObject(object, array){
    return getIn(fromJS(object), array);
};
