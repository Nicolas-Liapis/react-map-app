export function updateData(data) {
    return {type: 'UPDATE_DATA', data}
}

export function filterData(data) {
    return {type: 'FILTER_DATA', data}
}

export function material(mat) {
    return {type: 'MATERIAL', mat}
}