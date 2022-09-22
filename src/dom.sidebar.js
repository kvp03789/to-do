import { mainObject } from "./global.module";
import { createMainAll, clearDom } from "./dom.main.all";
import { createMainToday } from "./dom.main.today";
import { createMainWeek } from "./dom.main.week";
import { createMainImportant } from "./dom.main.important";


export const addSidebarEvent = function() {
    const allTitle = document.querySelector("#all-title");
    const todayTitle = document.querySelector("#today-title");
    const weekTitle = document.querySelector("#week-title");
    const importantTitle = document.querySelector("#important-title");
    const addProjects = document.querySelector("#add-project");
    const formDiv = document.querySelector(".form-div");
    const cancelButton = document.querySelector("#cancel-button");
    

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

    cancelButton.addEventListener("click", ()=> {
        formDiv.classList.add("hidden")
    })
}