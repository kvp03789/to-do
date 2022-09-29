import { mainObject } from "./global.module";
import {isThisWeek} from 'date-fns';



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
    mainObject.today.tasks.length = 0;
    mainObject.projects.tasks.forEach((e) => {
        e.taskList.forEach((i) => {
            if (isToday(i.date)){
                mainObject.today.tasks.push(i);
            }
        })
    })   
}

export const sortThisWeek = function() {
    mainObject.thisWeek.tasks.length = 0;
    mainObject.projects.tasks.forEach((e) => {
        e.taskList.forEach((i) => {
            let newDate = new Date(i.date);
            if (isThisWeek(newDate, { weekStartsOn: 0 })) {
                mainObject.thisWeek.tasks.push(i);
            }
        })
    }) 
}

export const isToday = function(date) {
    const today = new Date().toISOString().split('T')[0];
    console.log(today)
    return today == date;
    
}

// const isWeek = function(date) {
//     const today = new Date().toISOString().split('T')[0];
//     const thisWeek = newDate();
// }