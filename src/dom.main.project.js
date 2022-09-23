import PlusIcon from '../images/plus.svg';
// import StarIcon from '../images/star-svgrepo-com.svg';
import StarFillIcon from '../images/star-fill.svg';
import VerticalDots from '../images/dots-vertical.svg';
import projectFactory from './projects.module.js';
import {mainObject} from './global.module.js';
import {formDataStore} from './dom.sidebar.js';

const createTaskItem = function(name, details, date, ) {
    const taskContainer = document.querySelector(".task-container");
    const newItemBox = document.createElement("div");
    const left = document.createElement("div");
    const right = document.createElement("div");
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "radio");
    const titleSpan = document.createElement("span");
    const dateDiv = document.createElement("div");
    const dateSpan = document.createElement("span");
    const star = new Image();
    // star.src = StarIcon;
    const starFill = new Image();
    const verticalDots = new Image();

    verticalDots.src = VerticalDots;
    starFill.src = StarFillIcon;
    titleSpan.classList.add("task-title-span")
    dateDiv.classList.add(".date-div")
    dateSpan.classList.add(".task-date-span")
    newItemBox.classList.add("new-task-item");
    dateDiv.classList.add("date-div")
    star.classList.add("star-svg");
    starFill.classList.add("star-svg");
    right.classList.add("task-right");
    left.classList.add("task-left")


    titleSpan.innerText = name; //data from obj
    dateSpan.innerText = date;         //data from obj

    dateDiv.append(dateSpan);
    right.append(dateDiv, starFill)
    left.append(checkBox, titleSpan);
    newItemBox.append(left, right);
    taskContainer.append(newItemBox);
}

const createTaskForm = function(project, num) {
    const taskDiv = document.querySelector(".task-container");
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
        mainObject.projects.tasks[0].createTask(String(value1),"very important", testDate, false)
        createTaskItem(String(value1),"very important", "09/09/23", false);
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
    contentDiv.append(titleBlock, taskContainer, taskButtonDiv);

    taskButtonDiv.addEventListener("click", () => {
        createTaskForm(formDataStore.array[0]);
    })
}

