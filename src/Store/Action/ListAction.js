
export const addItem = (item) => {
    return { type:"ADD_ITEM", item }
}

export const deleteItem = (id) => {
    return { type: "DELETE_ITEM", id }
}

export const deleteRow =(table,rowId,rowCost) => {
    return {type: "DELETE_ROW", table,rowId,rowCost}
}

export const addReview =(review) => {
    return {type:"ADD_REVIEW",review}
}

export const addRow =(table,menu) => {
    return {type: "ADD_ROW",table,menu}
}

export const getState =(data) => {
    return {type: "GET_STATE", data}
}

export const deleteAllItem = (table) => {
    return {type: "DELETE_ALL_ITEM", table }
}