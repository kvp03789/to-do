import { mainObject } from "./global.module";


const projectFactory = (title) => {
    const taskList = [];

    // createTask = (name, details, date) => {

    //     projectFactory.taskList.push({name, details, date});
    // };
    
    return {
        title, taskList
    };
}

export const addToProjects = function(object) {
    mainObject.projects.tasks.push(object);
}


export const newProject = projectFactory("New");