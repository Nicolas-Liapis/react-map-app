export default function dataReducer(state = [], action) {
    switch(action.type) {
        case 'UPDATE_DATA':
            return [...state, {...action.data}];
        case 'FILTER_DATA':
            return [...state, {...action.newData}];
        case 'MATERIAL':
            return [...state, action.mat];
        default:
            return state;
    }
}