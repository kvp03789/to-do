import { mainObject } from "./global.module";


const projectFactory = (title) => {
    const taskList = [];

    const createTask = (name, details, date, important) => {
        taskList.push({name, details, date, important}); 
    };

    
    return {
        title, taskList, createTask, 
    };
}

export const addToProjects = function(object) {
    mainObject.projects.tasks.push(object);
}


export const newProject = projectFactory("New");
export const attempt = newProject.createTask("asd", "asd", "asdf", false);