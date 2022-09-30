import { mainObject } from "./global.module";
import { createMainAll, clearDom } from "./dom.main.all";
import { createMainToday } from "./dom.main.today";
import { createMainWeek } from "./dom.main.week";
import { createMainImportant } from "./dom.main.important";
import { projectFactory, addToProjects } from "./projects.module.js"
import MenuIcon from '../images/project-menu.svg';
import VerticalDots from '../images/dots-vertical.svg';
import {applyDataIndex, createMainProject, createTaskItem} from './dom.main.project.js';
import { isToday } from "./sort.module";
import {isThisWeek} from 'date-fns';

export const formDataStore = {
    value: 0,
    array: [],
    counter: 0,
    taskCounter: 0,
    dataVal: 0,
    getValue() {return this.value},
    setValue(x) {this.value = x}
}

export const addSidebarEvent = function() {
    const allTitle = document.querySelector("#all-title");
    const todayTitle = document.querySelector("#today-title");
    const weekTitle = document.querySelector("#week-title");
    const importantTitle = document.querySelector("#important-title");
    const addProjects = document.querySelector("#add-project");
    const formDiv = document.querySelector(".form-div");
    const inputField = document.querySelector("#name");
    const cancelButton = document.querySelector("#cancel-button");
    const addButton = document.querySelector("#add-button");

    const btnContainer = document.querySelector(".home");
    const btns = document.getElementsByClassName("sub-title");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", (e) => {
            let current = document.getElementsByClassName("selected");

            if(current.length > 0) {
                current[0].className = current[0].className.replace("selected", "");
            }
            e.target.classList.add("selected");
        });
        
    }
    

    allTitle.addEventListener("click", () => {
        clearDom();
        createMainAll();
        mainObject.projects.tasks.forEach((project) => {
            project.taskList.forEach((task) => {
                createTaskItem(task.name, task.details, task.date, task.important, project, project.taskList.indexOf(task), task.completed);       
            })
        })
        applyDataIndex();
    })

    todayTitle.addEventListener("click", () => {
        clearDom();
        createMainToday();
        const taskDiv = document.createElement("div");
        const contentDiv = document.querySelector(".content");
        taskDiv.classList.add("task-container");
        contentDiv.append(taskDiv);  
        mainObject.projects.tasks.forEach((project) => {
            project.taskList.forEach((task) => {
                if (isToday(task.date)) {
                    createTaskItem(task.name, task.details, task.date, task.important, project, project.taskList.indexOf(task), task.completed);
                }         
            })
        })
        applyDataIndex();
    });

    weekTitle.addEventListener("click", () => {
        clearDom();
        createMainWeek();
        const taskDiv = document.createElement("div");
        const contentDiv = document.querySelector(".content");
        taskDiv.classList.add("task-container");
        contentDiv.append(taskDiv);
        mainObject.projects.tasks.forEach((project) => {
            project.taskList.forEach((task) => {
                let newDate = new Date(task.date);
                if (isThisWeek(newDate, { weekStartsOn: 0 })) {
                    createTaskItem(task.name, task.details, task.date, task.important, project, project.taskList.indexOf(task), task.completed);
                }         
            })
        })
        applyDataIndex();
    });

    importantTitle.addEventListener("click", () => {
        clearDom();
        createMainImportant();
        const taskDiv = document.createElement("div");
        const contentDiv = document.querySelector(".content");
        taskDiv.classList.add("task-container");
        contentDiv.append(taskDiv);       
        mainObject.projects.tasks.forEach((project) => {
            project.taskList.forEach((task) => {
                if(task.important == true) {
                    createTaskItem(task.name, task.details, task.date, task.important, project, project.taskList.indexOf(task), task.completed);
                }         
            })
        })
        applyDataIndex();
    });

    addProjects.addEventListener("click", () => { 
        formDiv.classList.remove("hidden")
    })

    cancelButton.addEventListener("click", () => {
        formDiv.classList.add("hidden")
    })

    addButton.addEventListener("click", (e) => {
        e.preventDefault();
        const newProject = projectFactory(inputField.value);
        addToProjects(newProject);

        inputField.value = "";
        formDiv.classList.add("hidden");
        clearProjectsList();
        mainObject.projects.tasks.forEach((x) => {
            makeProjectListItem(x);
        })
    })
}

const clearProjectsList = function() {
    const allProjects = document.querySelector(".projects-list");
    formDataStore.taskCounter = 0;
    while(allProjects.firstChild) {
        allProjects.firstChild.remove();
    }
}

const makeProjectListItem = function(proj) {
    const projectsList = document.querySelector(".projects-list");

    const newItem = document.createElement("div");
    newItem.classList.add("project-list-item")
    newItem.classList.add("sub-title");
    newItem.setAttribute("data-index", String(formDataStore.counter))
    formDataStore.counter++;
    const menuIcon = new Image();
    menuIcon.src = MenuIcon;
    // const projectTitle = document.createElement("span");
    const projectTitle = document.createTextNode(`${proj.title}`)
    const vertDots = new Image();
    vertDots.src = VerticalDots;

    const left = document.createElement("div");
    left.classList.add("left");
    const right = document.createElement("div");
    right.classList.add("right");

    let value = String(formDataStore.getValue());
    projectTitle.innerText = value;

    // newItem.setAttribute("data-index", "0")
    formDataStore.array.push(value);
    

    newItem.addEventListener("click", (e) => {
        clearDom();
        if(proj.taskList.length === 0) {
            createMainProject(proj)
            formDataStore.dataVal = (e.target.dataset.index);
        }
        else {
        createMainProject(proj);
        proj.taskList.forEach((task) => {
            createTaskItem(`${task.name}`, `${task.details}`, task.date, task.important, proj, proj.taskList.indexOf(task), task.completed);
            })
        }
        applyDataIndex();
    })

    const optionsMenu = document.createElement("div");
    const editOption = document.createElement("div");
    const deleteOption = document.createElement("div");
    const dotsContainer = document.createElement("div");
    dotsContainer.classList.add("dots-container");
    optionsMenu.classList.add("options-menu");
    editOption.classList.add("option-item");
    deleteOption.classList.add("option-item");
    editOption.setAttribute("id", "option-edit");
    deleteOption.setAttribute("id", "option-delete");
    optionsMenu.classList.add("hidden2");
    editOption.innerText = "Edit";
    deleteOption.innerText = "Delete";
    optionsMenu.append(editOption, deleteOption);
    dotsContainer.append(vertDots, optionsMenu)
    newItem.append(menuIcon, projectTitle, dotsContainer);
    projectsList.append(newItem);

    //UPDATE PROJECT FORM
    const updateFormContainer = document.createElement("div");
    const btnContainer = document.createElement("div");
    const inputField = document.createElement("input");
    const cancelButton = document.createElement("button");
    const addButton = document.createElement("button");
    inputField.value = proj.title;
    addButton.innerText = "Add";
    cancelButton.innerText = "Cancel";
    btnContainer.append(cancelButton, addButton);
    updateFormContainer.append(inputField, btnContainer);
    updateFormContainer.classList.add("hidden-project-form");
    updateFormContainer.classList.add("really-hidden");
    addButton.setAttribute("id", "add-button");
    cancelButton.setAttribute("id", "cancel-button");
    projectsList.append(updateFormContainer);

    addButton.addEventListener("click", (e)=> {
        proj.title = inputField.value;
        inputField.value = "";
        updateFormContainer.classList.toggle("really-hidden");
        clearProjectsList();
        mainObject.projects.tasks.forEach((x) => {
            makeProjectListItem(x);
        })
        clearDom();
        createMainProject(proj);
        proj.taskList.forEach((task) => {
            createTaskItem(task.name, task.details, task.date, task.important, proj, proj.taskList.indexOf(task), task.completed)
        }) 
    })

    cancelButton.addEventListener("click", (e)=> {
        inputField.value = "";
        updateFormContainer.classList.toggle("really-hidden");
    })

    vertDots.addEventListener("click", (e) => {
        optionsMenu.classList.toggle("hidden2");
        dotsContainer.classList.toggle("dots-selected");
    });

    editOption.addEventListener("click", (e) => {
        updateFormContainer.classList.toggle("really-hidden");
        optionsMenu.classList.toggle("hidden2");
        dotsContainer.classList.toggle("dots-selected");
    })

    deleteOption.addEventListener("click", (e) => {
        mainObject.projects.tasks.splice(mainObject.projects.tasks.indexOf(proj), 1);
        clearProjectsList();
        mainObject.projects.tasks.forEach((x) => {
            makeProjectListItem(x);
        })
    })

    const projBtns = document.getElementsByClassName("sub-title");
    for (let i = 0; i < projBtns.length; i++) {
        projBtns[i].addEventListener("click", (e) => {
            let current = document.getElementsByClassName("selected");

            if(current.length > 0) {
                current[0].className = current[0].className.replace("selected", "");
            }
            e.target.classList.add("selected");
        });
        
    }
    // createUpdateForm(newItem);
}

// const createUpdateForm = function(ele) {
//     const updateFormContainer = document.createElement("div");
//     const btnContainer = document.createElement("div");
//     const inputField = document.createElement("input");
//     const cancelButton = document.createElement("button");
//     const addButton = document.createElement("button");

//     addButton.innerText = "Add";
//     cancelButton.innerText = "Cancel";
//     btnContainer.append(cancelButton, addButton);
//     updateFormContainer.append(inputField, btnContainer);
//     updateFormContainer.classList.add("hidden-project-form");
//     updateFormContainer.classList.add("really-hidden");
//     ele.append(updateFormContainer);
// }