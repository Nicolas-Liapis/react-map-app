export default function dataReducer(state = [], action) {
    switch(action.type) {
        case 'MATERIAL':
            return [...state, action.mat];
        default:
            return state;
    }
}