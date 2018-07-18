import { ADD_REMINDER, REMOVE_REMINDER, CLEAN_REMINDER } from '../contants';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies'
const reminder = (action) => {
    const { text, dueDate } = action;
    return {
        id: Math.random(),
        text: text,
        dueDate: dueDate,
    }
}

const reminders = (state = read_cookie("reminders") || [], action) => {
    let reminders;
    switch (action.type) {
        case ADD_REMINDER:
            reminders = [
                ...state,
                reminder(action)
            ];
            bake_cookie("reminders", reminders);
            return reminders;
        case REMOVE_REMINDER:
            reminders = state.filter(reminder => reminder.id !== action.id);
            bake_cookie("reminders", reminders);
            return reminders;
        case CLEAN_REMINDER:
            reminders = [];
            delete_cookie("reminders");
            return reminders;
        default:
            return state;
    }
}
export default reminders;