export const initState = {    
   
};

export function itemReducer (state = initState, action) {
    switch (action.type) {
        case "DELETE_ITEM":
            const newItem = state.item.filter((item) => item.id !== action.id);
            return{
                ...state,
                item: newItem
            };

        case "DELETE_ROW":
            const newTable= action.table.item.splice(action.table.item.indexOf(action.rowId),1)
                action.table.totalCost = action.table.totalCost - action.rowCost;
                action.table.totalItem= action.table.totalItem- 1;
            return {
                ...state,
                ...newTable
            };
        
        case "ADD_ROW":
            const newRowInTable = action.table.item.push(action.menu)
            action.table.totalCost = action.table.totalCost + action.menu.Cost;
            action.table.totalItem= action.table.totalItem + 1;
            return {
                ...state,
                ...newRowInTable
            };

        case "ADD_ITEM":
            const items = [action.item, ...state.item]
            return {
                ...state,
                item: items,
            };
        case "ADD_REVIEW":
            const review = [action.review,...state.reviews]
            return{
                ...state,
                reviews:review
            };
        
        case "GET_STATE":
            return {  
                ...action.data,
            }

        case "DELETE_ALL_ITEM":
            const newTable1 = action.table.item.splice(0,action.table.item.length)
            action.table.totalCost = 0;
            action.table.totalItem = 0;
            return {
                ...state,
                ...newTable1
            }
            
        default:
            return state;    
    }
};

 export default itemReducer;