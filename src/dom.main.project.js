import PlusIcon from '../images/plus.svg';
// import StarIcon from '../images/star-svgrepo-com.svg';
import StarIcon from '../images/important-star.svg';
import FilledStarIcon from '../images/filled.svg';
import VerticalDots from '../images/dots-vertical.svg';
import CheckMark from '../images/checkmark.svg';
import Minus from '../images/minus.svg';
import projectFactory from './projects.module.js';
import {mainObject} from './global.module.js';
import {formDataStore} from './dom.sidebar.js';
import {sortToday, sortThisWeek, sortImportant} from './sort.module.js';
import { clearDom } from './dom.main.all';


export const createTaskItem = function(name, details, date, important, project, num, completed) {
    const taskContainer = document.querySelector(".task-container");
    const contentDiv = document.querySelector(".content");
    const newItemBox = document.createElement("div");
    const left = document.createElement("div");
    const right = document.createElement("div");
    const titleSpan = document.createElement("span");
    const detailsSpan = document.createElement("span");
    const dateDiv = document.createElement("div");
    const dateSpan = document.createElement("span");
    const checkMarkDiv = document.createElement("div");
    const checkMark = new Image();
    const star = new Image();
    const verticalDots = new Image();
    const filledStar = new Image();
    
    star.setAttribute("id", "important-star")
    verticalDots.src = VerticalDots;
    if(important == true) {star.src = FilledStarIcon}
    else {star.src = StarIcon;}
    
    checkMark.src = CheckMark;
    filledStar.src = FilledStarIcon;
    titleSpan.classList.add("task-title-span");
    detailsSpan.classList.add("task-details-span");
    dateDiv.classList.add(".date-div");
    dateSpan.classList.add(".task-date-span");
    if (project.taskList[num].completed === 1) {
        newItemBox.classList.add("new-task-item-completed");
    } else {
        newItemBox.classList.add("new-task-item");
    }
    dateDiv.classList.add("date-div");
    star.classList.add("star-svg");
    filledStar.classList.add("star-svg");
    verticalDots.classList.add("dots-svg")
    right.classList.add("task-right");
    left.classList.add("task-left");
    checkMarkDiv.classList.add("check-div");
    checkMark.classList.add("check-svg");
    checkMark.classList.add("hidden");

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
    editOption.setAttribute("id", "option-edit");
    deleteOption.setAttribute("id", "option-delete");
    optionsMenu.classList.add("hidden2");
    editOption.innerText = "Edit";
    deleteOption.innerText = "Delete";
    optionsMenu.append(editOption, deleteOption);
    dotsContainer.append(verticalDots, optionsMenu);

    dateDiv.append(dateSpan);
    checkMarkDiv.append(checkMark);
    right.append(dateDiv, star, dotsContainer)
    left.append(checkMarkDiv, titleSpan, detailsSpan);
    newItemBox.append(left, right);
    taskContainer.append(newItemBox);

    if (project.taskList[num].completed === 1) {
        newItemBox.classList.add("line-through");
        checkMark.classList.remove("hidden");
    } else if (project.taskList[num].completed === 0) {
        checkMark.classList.add("hidden");
    }

    //EVENT LISTENERS FOR EACH ITEM

    editOption.addEventListener("click", (e) => {      
        optionsMenu.classList.toggle("hidden2");
        optionsMenu.classList.toggle("dots-selected");
        // project.taskList.forEach((ind) => {
        //     if(String(project.taskList.indexOf(ind)) == num) {
        //         createUpdateTaskForm(project, num);
        //     }    
        // })
        createUpdateTaskForm(project, num);
    })
    
    deleteOption.addEventListener("click", (e) => {
        project.taskList.splice(project.taskList.indexOf(project.taskList[num]) , 1); 
        clearDom();
        createMainProject(project);
        project.taskList.forEach((task) => {
            createTaskItem(task.name, task.details, task.date, task.important, project, project.taskList.indexOf(task), task.completed);
        })
        applyDataIndex();
        
        
        
    })

    verticalDots.addEventListener("click", (e) => {
        optionsMenu.classList.toggle("hidden2");
        dotsContainer.classList.toggle("dots-selected");
    });

    starEvent(star, project, num);

    checkMarkDiv.addEventListener("click", (e) => {
        checkMark.classList.toggle("hidden");
        newItemBox.classList.toggle("line-through");
        if (project.taskList[num].completed === 0) {
            project.taskList[num].completed = 1;
            newItemBox.classList.replace("new-task-item", "new-task-item-completed");
        } else {
            project.taskList[num].completed = 0;
        }
        clearDom();
        createMainProject(project);
        project.taskList.forEach((ta) => {
            createTaskItem(ta.name, ta.details, ta.date, ta.important, project, project.taskList.indexOf(ta), ta.completed)
            applyDataIndex();
        })
    })
}

const starEvent = function (x, project, num) {
    x.addEventListener("click", (e) => {
        if (e.target.src === StarIcon){
            e.target.src = FilledStarIcon;
        }
        else {e.target.src = StarIcon}
        if (project.taskList[num].important == true)
        {project.taskList[num].important = 0;}
        else {
            project.taskList[num].important = 1;
        }
        clearDom();
        createMainProject(project);
        project.taskList.forEach((ta) => {
            createTaskItem(ta.name, ta.details, ta.date, ta.important, project, project.taskList.indexOf(ta), ta.completed)
            applyDataIndex();
        })
        })
}

const createUpdateTaskForm = function(project, num) {
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
    const star = new Image();
    if(project.taskList[num].important == true) {
        star.src = FilledStarIcon
    } else {
        star.src = StarIcon;
    }
    star.classList.add("star-svg");
    const starDiv = document.createElement("div");
    const starSpan = document.createElement("span");
    starSpan.innerText = "Mark this task as important?"
    starSpan.classList.add("star-span");
    starDiv.classList.add("star-div");

    titleLabel.innerText = "Title";
    detailsLabel.innerText = "Details(optional):";
    dateLabel.innerText = "Date:";
    addButton.innerText = "Add";
    cancelButton.innerText = "Cancel";

    newTaskFormDiv.classList.add("new-task-form-div");
    addButton.setAttribute("id", "add-button");
    cancelButton.setAttribute("id", "cancel-button");
    dateInput.setAttribute("type", "date");
    addButton.setAttribute("type", "submit");

    titleInput.value = project.taskList[num].name;
    detailsInput.value = project.taskList[num].details;
    dateInput.value = project.taskList[num].date;


    starDiv.append(starSpan, star);
    titleLabel.append(titleInput);
    detailsLabel.append(detailsInput);
    dateLabel.append(dateInput);
    buttonDiv.append(addButton, cancelButton);
    newTaskFormDiv.append(titleLabel, detailsLabel, dateLabel, starDiv, buttonDiv);
    taskDiv.append(newTaskFormDiv);

    star.addEventListener("click", (e) => {
        if (e.target.src === StarIcon){
            e.target.src = FilledStarIcon;
        }
        else {e.target.src = StarIcon;
        }
    })

    addButton.addEventListener("click", (e) => {
        e.preventDefault();
        newTaskFormDiv.classList.add("hidden");
        project.taskList[num].name = titleInput.value
        project.taskList[num].details = detailsInput.value;
        project.taskList[num].date = dateInput.value;
        if(star.src === FilledStarIcon) {
            project.taskList[num].important = 1;
        } else {
            project.taskList[num].important = 0;
        }
        project.taskList[num].completed = 0;
        clearDom();
        createMainProject(project);
        project.taskList.forEach((task) => {
            createTaskItem(task.name, task.details, task.date, task.important, project, project.taskList.indexOf(task), task.completed);
        })
        applyDataIndex();
    })

    cancelButton.addEventListener("click", (e) => {
        titleInput.value = '';
        detailsInput.value = '';
        dateInput.value = '';
        if (e.target.src === FilledStarIcon){
            e.target.src = StarIcon;
        }
        clearDom();
        createMainProject(project);
        project.taskList.forEach((arr) => {
            createTaskItem(arr.name, arr.details, arr.date, arr.important, project, project.arr.taskList.indexOf(arr), completed);
        })
    })
}


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
    const star = new Image();
    star.src = StarIcon;
    star.classList.add("star-svg");
    const starDiv = document.createElement("div");
    const starSpan = document.createElement("span");
    starSpan.innerText = "Mark this task as important?"
    starSpan.classList.add("star-span");
    starDiv.classList.add("star-div");

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

    starDiv.append(starSpan, star);
    titleLabel.append(titleInput);
    detailsLabel.append(detailsInput);
    dateLabel.append(dateInput);
    buttonDiv.append(addButton, cancelButton);
    newTaskFormDiv.append(titleLabel, detailsLabel, dateLabel, starDiv, buttonDiv);
    taskDiv.append(newTaskFormDiv);
    let importantValue = 0;
    star.addEventListener("click", (e) => {
        if (e.target.src === StarIcon){
            e.target.src = FilledStarIcon;
            importantValue = 1;
        }
        else {e.target.src = StarIcon;
            importantValue = 0;
        }
    })

    addButton.addEventListener("click", (e) => {
        let value1 = titleInput.value;
        e.preventDefault();
        newTaskFormDiv.classList.add("hidden");
        project.createTask(String(value1), detailsInput.value, dateInput.value, importantValue, 0)
        // sortToday();
        // sortThisWeek();
        // sortImportant();
        clearDom();
        createMainProject(project);
        project.taskList.forEach((ta) => {
            createTaskItem(ta.name, ta.details, ta.date, ta.important, project, project.taskList.indexOf(ta), ta.completed)
            applyDataIndex();
        })
    })

    cancelButton.addEventListener("click", (e) => {
        titleInput.value = '';
        detailsInput.value = '';
        dateInput.value = '';
        if (e.target.src === FilledStarIcon){
            e.target.src = StarIcon;
        }
        clearDom();
        createMainProject(project);
        project.taskList.forEach((arr) => {
            createTaskItem(arr.name, arr.details, arr.date, arr.important, project, project.arr.taskList.indexOf(arr), arr.completed);
        })
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
    const removeCompletedDiv = document.createElement("div");
    const plusIcon = new Image();
    const minusIcon = new Image();
    const addTaskSpan = document.createElement("span");
    const removeCompletedSpan = document.createElement("span");

    plusIcon.src = PlusIcon;
    minusIcon.src = Minus;
    taskButtonDiv.classList.add("task-button-div");
    removeCompletedDiv.classList.add("task-button-div");
    plusIcon.classList.add("plus-svg");
    minusIcon.classList.add("minus-svg");
    taskButtonDiv.classList.add("task-button-span");
    removeCompletedDiv.classList.add("task-button-span");
    addTaskSpan.innerText = "Add Task";
    removeCompletedSpan.innerText = "Remove Completed";
    taskContainer.classList.add("task-container");

    taskButtonDiv.append(plusIcon, addTaskSpan);
    removeCompletedDiv.append(minusIcon, removeCompletedSpan)

    titleBlock.append(title);
    contentDiv.prepend(titleBlock);
    contentDiv.append(titleBlock, taskContainer, taskButtonDiv, removeCompletedDiv);

    taskButtonDiv.addEventListener("click", () => {
        createTaskForm(project);
    })

    removeCompletedDiv.addEventListener("click", () => {
        project.taskList.forEach((z) => {
            if (z.completed === 1) {
                project.taskList.splice(`${project.taskList.indexOf(z)}`, 1);
            }
        })
        clearDom();
        createMainProject(project);
        project.taskList.forEach((arr) => {
            createTaskItem(arr.name, arr.details, arr.date, arr.important, project, project.taskList.indexOf(arr), arr.completed);
        })
    })
}

export const applyDataIndex = function() {
    //set data index for each task item
    const taskItems = document.querySelectorAll(".new-task-item");
    let i = 0;
    taskItems.forEach((t) => {
        t.setAttribute("data-index", `${i}`);
        i++; 
    })
    // for (let i = 0; i < taskItems.length; i++) {}
}