import {ADD_REMINDER,REMOVE_REMINDER,CLEAN_REMINDER} from '../contants'
export const add_reminder = (text,dueDate) => {
    return{
        type: ADD_REMINDER,
        text,
        dueDate
    }
}

export const remove_reminder =(id)=>{
    return {
        type:REMOVE_REMINDER,
        id
    }
}

export const clean_reminder = () => ({
    type: CLEAN_REMINDER,
})