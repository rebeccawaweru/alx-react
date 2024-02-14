import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

export const selectCourse = (index) => {
    return {
        type: SELECT_COURSE,
        index: index
    };
};

export const unselectCourse = (index) => {
    return {
        type: UNSELECT_COURSE,
        index: index
    };
};

export const fetchCourse = (courses) => {
    return {
        type: FETCH_COURSE_SUCCESS,
        data:courses
    }
}