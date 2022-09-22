export const createMainToday = function() {
    //for the title block
    const contentDiv = document.querySelector(".content");
    const titleBlock = document.createElement("div");
    const title = document.createElement("h1");
    titleBlock.classList.add("title-block");
    title.classList.add("title");
    title.innerText = "Today's Tasks";

    titleBlock.append(title);
    contentDiv.append(titleBlock);
    //for tasks
    
}