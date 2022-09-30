import { mainObject } from "./global.module";


export const projectFactory = (title) => {
    const taskList = [];

    const createTask = (name, details, date, important, completed) => {
        taskList.push({name, details, date, important, completed}); 
    };

    const deleteTask = function(task) {
        taskList.forEach((i) => {
            if (i.name === task.name){
                taskList.splice(`${taskList.indexOf(i)}`, 1);
            }
        })
    }
    
    return {
        title, taskList, createTask, deleteTask,
    };
}

export const addToProjects = function(object) {
    mainObject.projects.tasks.push(object);
}


// export const newProject = projectFactory("BuildRoof");
