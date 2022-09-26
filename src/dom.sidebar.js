import { mainObject } from "./global.module";
import { createMainAll, clearDom } from "./dom.main.all";
import { createMainToday } from "./dom.main.today";
import { createMainWeek } from "./dom.main.week";
import { createMainImportant } from "./dom.main.important";
import { projectFactory, addToProjects } from "./projects.module.js"
import MenuIcon from '../images/project-menu.svg';
import VerticalDots from '../images/dots-vertical.svg';
import {createMainProject, createTaskItem} from './dom.main.project.js';

export const formDataStore = {
    value: 0,
    array: [],
    counter: 0,
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
            project.taskList.forEach((item) => {
                createTaskItem(String(item.name), String(item.details), item.date)
            })
        });
    })

    todayTitle.addEventListener("click", () => {
        clearDom();
        createMainToday();
        mainObject.today.tasks.forEach((project) => {          
            createTaskItem(String(project.name), String(project.details), project.date);
            })
    });

    weekTitle.addEventListener("click", () => {
        clearDom();
        createMainWeek();
        // mainObject.thisWeek.tasks.forEach((i) => {
        //     console.log(i.name);
        // })
    });

    importantTitle.addEventListener("click", () => {
        clearDom();
        createMainImportant();
        mainObject.important.tasks.forEach((project) => {
            createTaskItem(String(project.name), String(project.details), project.date);
        })
    });

    addProjects.addEventListener("click", () => { 
        formDiv.classList.remove("hidden")
    })

    cancelButton.addEventListener("click", () => {
        formDiv.classList.add("hidden")
    })

    addButton.addEventListener("click", (e) => {
        e.preventDefault();
        let value = String(inputField.value);
        formDataStore.setValue(value);
        const newProject = projectFactory(value);
        addToProjects(newProject);
        inputField.value = "";
        formDiv.classList.add("hidden");
        makeProjectListItem();
    })

}
const makeProjectListItem = function() {
    const projectsList = document.querySelector(".projects-list");

    const newItem = document.createElement("div");
    newItem.classList.add("project-list-item")
    newItem.setAttribute("data-index", String(formDataStore.counter))
    formDataStore.counter++;
    const menuIcon = new Image();
    menuIcon.src = MenuIcon;
    const projectTitle = document.createElement("span");
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

    left.append(menuIcon, projectTitle)
    right.append(vertDots);
    newItem.append(left, right);
    projectsList.append(newItem);

    newItem.addEventListener("click", (e) => {
        clearDom();
        if (mainObject.projects.tasks[formDataStore.array.indexOf(`${value}`)].taskList.length === 0) {
            createMainProject(mainObject.projects.tasks[formDataStore.array.indexOf(`${value}`)]);
            formDataStore.dataVal = (e.target.dataset.index);
        }
        else {
            clearDom();
            createMainProject(mainObject.projects.tasks[formDataStore.array.indexOf(`${value}`)]);
            mainObject.projects.tasks[formDataStore.array.indexOf(`${value}`)].taskList.forEach((item) => { 
                createTaskItem(String(item.name), String(item.details), item.date)
            })
        }
        
    })

}