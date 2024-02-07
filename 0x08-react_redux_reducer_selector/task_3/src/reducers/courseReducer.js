const initialState = [];

export const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_COURSE_SUCCESS':
            const coursesWithSelection = action.data.map(course => ({
                ...course, isSelected:false
            }));
            return coursesWithSelection;
        case 'SELECT_COURSE' :
            return state.map(course =>
                course.id === action.index ? { ...course, isSelected: !course.isSelected } : course
              );
        default:
            return state
    }
}