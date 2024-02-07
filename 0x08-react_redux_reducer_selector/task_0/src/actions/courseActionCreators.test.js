import { selectCourse, unselectCourse } from "./courseActionCreators";

describe('/calling select sourse', () => {
    it('/calls select course', () => {
        const selectfn = selectCourse(1)
        const obj = { type: "SELECT_COURSE", payload: 1 }
        expect(selectfn).toEqual(obj)
    });

    it('/calls select course', () => {
        const selectfn =  unselectCourse(1)
        const obj = { type: "UNSELECT_COURSE", payload: 1 }
        expect(selectfn).toEqual(obj)
    });
})