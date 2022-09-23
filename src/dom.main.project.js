import PlusIcon from '../images/plus.svg';
// import StarIcon from '../images/star-svgrepo-com.svg';
import StarFillIcon from '../images/star.svg';
import VerticalDots from '../images/dots-vertical.svg';

const createTaskItem = function() {
    const taskContainer = document.querySelector(".task-container");
    const newItemBox = document.createElement("div");
    const left = document.createElement("div");
    const right = document.createElement("div");
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "radio");
    const titleSpan = document.createElement("span");
    const dateDiv = document.createElement("div");
    const star = new Image();
    const starFill = new Image();
    // star.src = StarIcon;
    starFill.src = StarFillIcon;
    const verticalDots = new Image();
    verticalDots.src = VerticalDots;

    
    newItemBox.classList.add("new-task-item");
    dateDiv.classList.add("date-div")
    star.classList.add("star-svg");
    starFill.classList.add("star-svg");
    right.classList.add("task-right");
    left.classList.add("task-left")

    right.append(dateDiv, star, )
    left.append(checkBox, titleSpan);
    newItemBox.append(left, right);
    taskContainer.append(newItemBox);
}

export const createMainProject = function(project) {
    //for the title block
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
        createTaskItem();
    })
}

