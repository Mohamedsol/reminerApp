import { ADD_REMINDER, REMOVE_REMINDER, CLEAR_REMINDER } from "../Actions/ActionTypes";


const reminders = (state=[], action) => {
    let reminders= [];

    if(action.type === ADD_REMINDER) {
        reminders = [...state, {text: action.text, date: action.date, id: Math.random()}]
        console.log("from reducer" , reminders)
        return reminders
    } else if(action.type === REMOVE_REMINDER){
        reminders = state.filter( reminder => reminder.id !== action.id)
        return reminders
    } else if(action.type === CLEAR_REMINDER){
        reminders = []
        return reminders
    } else {
        return state
    }
}

export default reminders