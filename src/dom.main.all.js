export const createMainAll = function() {
    //for the title block
    const contentDiv = document.querySelector(".content");
    const titleBlock = document.createElement("div");
    const title = document.createElement("h1");
    titleBlock.classList.add("title-block");
    title.classList.add("title");
    title.innerText = "All Tasks";

    titleBlock.append(title);
    contentDiv.append(titleBlock);
    //for tasks

}

export const clearDom = function() {
    const contentDiv = document.querySelector(".content");
    while(contentDiv.firstChild) {
        contentDiv.firstChild.remove();
    }
}

export const makeTaskBox = function(task) {
    
}