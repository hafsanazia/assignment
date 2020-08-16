import employeeList from '../data/employeeList.json';

const initialState = {
    data: employeeList,
}

export default function employeeReducer(state = initialState, action) {
    return state;
}