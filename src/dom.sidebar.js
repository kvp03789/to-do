export const addSidebarEvent = function() {
    const allTitle = document.querySelector("#all-title");
    const todayTitle = document.querySelector("#today-title");
    const weekTitle = document.querySelector("#week-title");
    const importantTitle = document.querySelector("#important-title");

    allTitle.addEventListener("click", (e) => {
        console.log("all");
    });

    todayTitle.addEventListener("click", (e) => {
        console.log("today");
    });

    weekTitle.addEventListener("click", (e) => {
        console.log("week");
    });

    importantTitle.addEventListener("click", (e) => {
        console.log("important");
    });
}