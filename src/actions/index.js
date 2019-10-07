export const ADD_RECIPE = 'ADD_RECIPE'
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR'


export const addRecipe = ({day,recipie, meal})=>{
    return {
        type:ADD_RECIPE,
        recipie,
        day,
        meal,
    }
}

export const removeFromCalendar = ({day,meal})=>{
    return {
        type:REMOVE_FROM_CALENDAR,
        day,
        meal,
    }
}