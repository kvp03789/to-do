import { mainObject } from "./global.module";
import {isThisWeek} from 'date-fns';
import { getDate } from "date-fns";


export const sortImportant = function() {
    mainObject.important.tasks.length = 0;
    mainObject.projects.tasks.forEach((e) => {
        e.taskList.forEach((i) => {
            if (i.important == true){
                mainObject.important.tasks.push(i);
            }
        })
    })   
}

export const sortToday = function() {
    mainObject.projects.tasks.forEach((e) => {
        e.taskList.forEach((i) => {
            if (isToday(i.date)){
                mainObject.today.tasks.push(i);
            }
        })
    })   
}

export const sortThisWeek = function() {
    mainObject.projects.tasks.forEach((e) => {
        e.taskList.forEach((i) => {
            if (isThisWeek(i.date)){
                mainObject.thisWeek.tasks.push(i);
            }
        })
    }) 
}

const isToday = function(date) {
    const today = new Date();
    return (today.toDateString() == new Date(date).toDateString())
}

// const isWeek = function(date) {
//     const thisWeek = newDate();
// }