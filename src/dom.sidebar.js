import { mainObject } from "./global.module";
import { createMainAll, clearDom } from "./dom.main.all";
import { createMainToday } from "./dom.main.today";
import { createMainWeek } from "./dom.main.week";
import { createMainImportant } from "./dom.main.important";
import { projectFactory, addToProjects } from "./projects.module.js"
import MenuIcon from '../images/project-menu.svg';
import VerticalDots from '../images/dots-vertical.svg';
import {createMainProject} from './dom.main.project.js';

const formDataStore = {
    value: 0,
    array: [],
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
    

    allTitle.addEventListener("click", () => {
        clearDom();
        createMainAll();
        // mainObject.projects.tasks.forEach((i) => {
        //     i.taskList.forEach((j) => {
        //         console.log(j.name);
        //     })
        // })
    });

    todayTitle.addEventListener("click", () => {
        clearDom();
        createMainToday();
        // mainObject.today.tasks.forEach((i) => {
        //     console.log(i.name);
        // })
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
        // mainObject.important.tasks.forEach((i) => {
        //     console.log(i.name);
        // })
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
        createMainProject(mainObject.projects.tasks[formDataStore.array.indexOf(`${value}`)]);
    })

}