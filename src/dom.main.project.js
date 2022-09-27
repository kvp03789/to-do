import PlusIcon from '../images/plus.svg';
// import StarIcon from '../images/star-svgrepo-com.svg';
import StarIcon from '../images/important-star.svg';
import FilledStarIcon from '../images/filled.svg';
import VerticalDots from '../images/dots-vertical.svg';
import projectFactory from './projects.module.js';
import {mainObject} from './global.module.js';
import {formDataStore} from './dom.sidebar.js';
import {sortToday, sortThisWeek, sortImportant} from './sort.module.js';


export const createTaskItem = function(name, details, date, important) {
    const taskContainer = document.querySelector(".task-container");
    const contentDiv = document.querySelector(".content");
    const newItemBox = document.createElement("div");
    const left = document.createElement("div");
    const right = document.createElement("div");
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "radio");
    const titleSpan = document.createElement("span");
    const detailsSpan = document.createElement("span");
    const dateDiv = document.createElement("div");
    const dateSpan = document.createElement("span");
    const star = new Image();
    const verticalDots = new Image();
    const filledStar = new Image();
    
    star.setAttribute("id", "important-star")
    verticalDots.src = VerticalDots;
    if(important == true) {star.src = FilledStarIcon}
    else {star.src = StarIcon;}
    
    filledStar.src = FilledStarIcon
    titleSpan.classList.add("task-title-span")
    detailsSpan.classList.add("task-details-span");
    dateDiv.classList.add(".date-div");
    dateSpan.classList.add(".task-date-span");
    newItemBox.classList.add("new-task-item");
    dateDiv.classList.add("date-div")
    star.classList.add("star-svg");
    filledStar.classList.add("star-svg");
    verticalDots.classList.add("dots-svg")
    right.classList.add("task-right");
    left.classList.add("task-left")


    titleSpan.innerText = name; //data from obj
    detailsSpan.innerText = details; //data from obj
    dateSpan.innerText = date;         //data from obj

    const optionsMenu = document.createElement("div");
    const editOption = document.createElement("div");
    const deleteOption = document.createElement("div");
    const dotsContainer = document.createElement("div");
    dotsContainer.classList.add("dots-container");
    optionsMenu.classList.add("options-menu");
    editOption.classList.add("option-item");
    deleteOption.classList.add("option-item");
    optionsMenu.classList.add("hidden2");
    editOption.innerText = "Edit";
    deleteOption.innerText = "Delete";
    optionsMenu.append(editOption, deleteOption);
    dotsContainer.append(verticalDots);

    dateDiv.append(dateSpan);
    
    right.append(dateDiv, star, dotsContainer, optionsMenu)
    left.append(checkBox, titleSpan, detailsSpan);
    newItemBox.append(left, right);
    taskContainer.append(newItemBox);
    document.querySelectorAll(".option-item").forEach((i) => {
        i.addEventListener("click", (e) => {
            console.log("it works");
        })
    })

    
    verticalDots.addEventListener("click", (e) => {
        optionsMenu.classList.toggle("hidden2");
        dotsContainer.classList.toggle("dots-selected");
    });

    starEvent(star);

    newItemBox.setAttribute("data-index", String(formDataStore.taskCounter));
    formDataStore.taskCounter++;
}

const starEvent = function (x) {
    x.addEventListener("click", (e) => {
        if (e.target.src === StarIcon){
            e.target.src = FilledStarIcon;
        }
        else {e.target.src = StarIcon}

        mainObject.projects.tasks.forEach((ind) => {
            ind.taskList.forEach((i) => {
                if (String(ind.taskList.indexOf(i)) == e.target.parentElement.parentElement.dataset.index) {
                    if(i.important == false) {
                        i.important = true;
                    } else {i.important = false}
                }
            })
        })
        sortImportant();
        })

        
    
}


// const displayOptions = function(ele) {
//     const optionsMenu = document.createElement("div");
//     const editOption = document.createElement("div");
//     const deleteOption = document.createElement("div");

//     optionsMenu.classList.add("options-menu");
//     editOption.classList.add("option-item");
//     deleteOption.classList.add("option-item");
//     optionsMenu.append(editOption, deleteOption);
//     ele.parentElement.append(optionsMenu);
// }

const createTaskForm = function(project, num) {
    const taskDiv = document.querySelector(".task-container");
    // const taskDiv = document.createElement("div"); 
    // taskDiv.classList.add("task-container");
    const newTaskFormDiv = document.createElement("div");
    const form = document.createElement("form");
    const titleLabel = document.createElement("label");
    const detailsLabel = document.createElement("label");
    const dateLabel = document.createElement("label");
    const titleInput = document.createElement("input");
    const detailsInput = document.createElement("input");
    const dateInput = document.createElement("input");
    const buttonDiv = document.createElement("div");
    const addButton = document.createElement("button");
    const cancelButton = document.createElement("button");

    const projectReference = num;

    titleLabel.innerText = "Title:";
    detailsLabel.innerText = "Details(optional):";
    dateLabel.innerText = "Date:";
    addButton.innerText = "Add";
    cancelButton.innerText = "Cancel";

    newTaskFormDiv.classList.add("new-task-form-div");
    addButton.setAttribute("id", "add-button");
    cancelButton.setAttribute("id", "cancel-button");
    dateInput.setAttribute("type", "date");
    addButton.setAttribute("type", "submit");

    titleLabel.append(titleInput);
    detailsLabel.append(detailsInput);
    dateLabel.append(dateInput);
    buttonDiv.append(addButton, cancelButton);
    newTaskFormDiv.append(titleLabel, detailsLabel, dateLabel, buttonDiv);
    taskDiv.append(newTaskFormDiv);

    addButton.addEventListener("click", (e) => {
        let value1 = titleInput.value;
        e.preventDefault();
        newTaskFormDiv.classList.add("hidden");
        const testDate = new Date(2022, 8, 22);
        project.createTask(String(value1),"very important", dateInput.value, false)
        createTaskItem(String(value1),"very very important", dateInput.value, false);
        sortToday();
        // sortThisWeek();
        sortImportant();
    })
}

export const createMainProject = function(project) {
    //for the title block
    const newTaskFormDiv = document.querySelector(".new-task-form-div")
    const contentDiv = document.querySelector(".content");
    const taskContainer = document.createElement("div");
    const titleBlock = document.createElement("div");
    const title = document.createElement("h1");
    titleBlock.classList.add("title-block");
    title.classList.add("title");
    title.innerText = `${project.title}`;

    const taskButtonDiv = document.createElement("div");
    const plusIcon = new Image();
    const addTaskSpan = document.createElement("span");

    plusIcon.src = PlusIcon;
    taskButtonDiv.classList.add("task-button-div");
    plusIcon.classList.add("plus-svg");
    taskButtonDiv.classList.add("task-button-span");
    addTaskSpan.innerText = "Add Task";
    taskContainer.classList.add("task-container");

    taskButtonDiv.append(plusIcon, addTaskSpan);

    titleBlock.append(title);
    contentDiv.prepend(titleBlock);
    contentDiv.append(titleBlock, taskContainer, taskButtonDiv);

    taskButtonDiv.addEventListener("click", () => {
        createTaskForm(project);
    })
}

