import { mainObject } from "./global.module";

export const sortImportant = function() {
    mainObject.projects.tasks.forEach((e) => {
        e.taskList.forEach((i) => {
            if (i.important === true){
                mainObject.important.tasks.push(i);
            }
        })
    })   
}

export const sortToday = function() {

}

export const sortThisWeek = function() {
    
}