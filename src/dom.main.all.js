import {formDataStore} from './dom.sidebar.js';

export const createMainAll = function() {
    //for the title block
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");
    const contentDiv = document.querySelector(".content");
    const titleBlock = document.createElement("div");
    const title = document.createElement("h1");
    titleBlock.classList.add("title-block");
    title.classList.add("title");
    title.innerText = "All Tasks";

    titleBlock.append(title);
    contentDiv.append(titleBlock, taskContainer);
    //for tasks

}

export const clearDom = function() {
    const contentDiv = document.querySelector(".content");
    formDataStore.taskCounter = 0;
    while(contentDiv.firstChild) {
        contentDiv.firstChild.remove();
    }
}

export const makeTaskBox = function(task) {
    
}